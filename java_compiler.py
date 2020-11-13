import re
import subprocess
import sys

from os.path import exists, splitext, basename
from pathlib import Path
from subprocess import Popen, STDOUT, PIPE


def read_input_file(input_file):
    with open(input_file, 'r') as f:
        return f.read()


def get_input_sequence_file_from_parent(input_file):
    parent = Path(input_file).parents[0]
    return f'{parent}/input_sequence.txt'


def get_input_sequence_file_from_grandparent(input_file):
    grandparent = Path(input_file).parents[1]
    return f'{grandparent}/input_sequence.txt'


def get_input_from_file(input_file):
    # Will check up 2 directories, for grading purposes
    input_sequence_file = get_input_sequence_file_from_parent(input_file)

    if exists(input_sequence_file):
        return read_input_file(input_sequence_file)

    input_sequence_file = get_input_sequence_file_from_grandparent(input_file)

    if exists(input_sequence_file):
        return read_input_file(input_sequence_file)

    return ''
    

def compile_java(java_file):
    subprocess.run(['javac', java_file])


# def write_to_output_file(status, input_file):
    # output_file = f'{splitext(input_file)[0]}.txt'

    # with open(output_file, 'w') as f:
        # f.write(status)


def execute_in_shell(command, file_, input_='', stdin=None):
    p = Popen([command, file_], stdout=PIPE, stdin=PIPE, stderr=PIPE) 
    print_output_communication(p.communicate(input=input_.encode()), file_)


def print_output_communication(output, file_):
    for status in output:
        # write_to_output_file(status.decode(), file_)
        print(status.decode())


def check_for_multi_runs(input_sequence):
    return input_sequence.split('New:\n')


def run_java_code(java_file):
    compile_java(java_file)
    java_input = get_input_from_file(java_file)
    java_input = check_for_multi_runs(java_input)

    for input_sequence in java_input:
        print('INPUT:\n', input_sequence)
        print('==================== PROGRAM OUTPUT ====================')
        execute_in_shell('java', java_file, input_sequence)


def run_python_code(python_file):
    print('Python functionality not set up yet.')


def verify_verilog_code(verilog_file):
    with open(verilog_file, 'r') as f:
        verilog_contents = f.read()

    if not re.search(r'\$finish', verilog_contents):
        print('Missing $finish')
        return False

    if not re.search(r'\$dumpfile', verilog_contents):
        print('Missing $dumpfile(file_name.vcd)')
        return False

    if not re.search(r'\$dumpvars', verilog_contents):
        print('Missing $dumpvars(0, module_name)')
        return False

    return True

def compile_verilog(vvp_file, verilog_file):
    cell_library = '~/Desktop/school/advanced-digital-design/OSU_Cell_Library'
    p = Popen(['iverilog', '-o', vvp_file, '-y', cell_library, '-v', verilog_file], 
        stdout=PIPE, stdin=PIPE, stderr=PIPE)
    print_output_communication(p.communicate(), verilog_file)


def run_verilog_code(verilog_file):
    if verify_verilog_code(verilog_file):
        vvp_file = f'{verilog_file}vp'
        compile_verilog(vvp_file, verilog_file)
        execute_in_shell('vvp', vvp_file) 

    
def run_code():
    file_to_run = sys.argv[1] # See vimrc
    print(f'Running: {basename(file_to_run)}')

    if file_to_run.endswith('.java'):
        run_java_code(file_to_run)
        return

    if file_to_run.endswith('.py'):
        run_python_code(file_to_run)
        return

    if file_to_run.endswith('.v'):
        run_verilog_code(file_to_run)
        return

    print('This file type is not supported')


if __name__ == '__main__':
    run_code()

