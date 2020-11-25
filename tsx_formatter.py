import random
import re
import sys

from utils_print import failprint, successprint


def get_file_contents(tsx_file):
    with open(tsx_file, 'r') as f:
        return f.read()


def get_class_name_instances(file_contents):
    return re.findall(r'className=\'\w.+?\'', file_contents)


def verify_size(list1, list2):
    if len(list1) != len(list2):
        failprint('Lists not the same size')
        sys.exit(1)


def sub_class_name_instances(class_name_intstances, class_consts, file_contents):
    verify_size(class_name_intstances, class_consts)
    new_file_contents = file_contents

    for class_inst, class_const in zip(class_name_intstances, class_consts):
        _, const_name_lower = get_const_names(class_const)
        new_file_contents = re.sub(class_inst, 
                f'className={{formatted{const_name_lower}}}',new_file_contents)

    return new_file_contents


def remove_extraneous_quotations(class_arr):
    output = []

    for c in class_arr:
        output.append(c.replace('\'', '').replace('"', ''))

    return output


def get_random_name():
    names = []
    with open('names.txt', 'r') as f:
        names = f.readlines()

    return names[random.randint(0, len(names)-1)].strip()


def create_tsx_constant(classes):
    name = get_random_name().upper()
    output = f'const UNTITLED_{name}: string = `\n'
    for c in classes:
        output += '  ' + c + '\n'

    output += '`\n\n'

    return output


def create_class_constants(class_name_intstances):
    output = []
    for class_name_inst in class_name_intstances:
        classes = re.search(r'\'\w.+?\'', class_name_inst).group(0).split(' ')
        classes = remove_extraneous_quotations(classes)
        output.append(create_tsx_constant(classes))

    return output


def capitalize_nth(my_string, n):
    return ''.join([my_string[:n], my_string[n].upper(), my_string[n + 1:]])


def get_const_names(class_const):
    const_name = re.search(r'[A-Z0-9_]+', class_const).group(0)
    const_name_lower = const_name.replace('_', '').capitalize()
    const_name_lower = capitalize_nth(const_name_lower, 8)

    return const_name, const_name_lower


def create_formatted_class_consts(class_consts):
    output = []
    for class_const in class_consts:
        const_name, const_name_lower = get_const_names(class_const)
        output.append(
                f'const formatted{const_name_lower}: string = '
                + f'formatClassList({const_name})\n\n'
        )

    return output


def get_insert_index_cc(file_contents):
    m = re.search(r'type.+?}\s\s', file_contents, re.DOTALL) or (
        re.search(r'import.+?\n\n\n', file_contents, re.DOTALL))

    if m:
        location = m.end()
        return location

    return 0


def get_insert_index_fcc(file_contents):
    m = re.search(r'return \(.+?<', file_contents, re.DOTALL)

    if m:
        location = m.start()
        return location

    return 0


def insert_new_info_fc(class_consts, formatted_class_consts, file_contents):
    verify_size(class_consts, formatted_class_consts)
    new_file_contents = file_contents

    for cc, fcc in zip(class_consts, formatted_class_consts):
        icc = get_insert_index_cc(new_file_contents)
        new_file_contents = (
                new_file_contents[:icc] 
                + cc 
                + new_file_contents[icc:]
        )

        ifcc = get_insert_index_fcc(new_file_contents)
        new_file_contents = (
                new_file_contents[:ifcc]
                + fcc
                + new_file_contents[ifcc:]
        )

    return new_file_contents


def write_tsx_file(tsx_file, new_file):
    with open(tsx_file, 'w') as f:
        f.write(new_file)


def format_tsx(tsx_file):
    file_contents = get_file_contents(tsx_file)

    class_name_intstances = get_class_name_instances(file_contents)

    class_consts = create_class_constants(class_name_intstances)
    formatted_class_consts = create_formatted_class_consts(class_consts)

    new_file_contents = sub_class_name_instances(
                            class_name_intstances,
                            class_consts,
                            file_contents
                        )

    new_file_contents = insert_new_info_fc(
                            class_consts, 
                            formatted_class_consts,
                            new_file_contents
                        )

    write_tsx_file(tsx_file, new_file_contents)
    successprint(f'Formatted {len(class_name_intstances)} classNames')

