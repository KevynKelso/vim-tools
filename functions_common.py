from subprocess import Popen, STDOUT, PIPE


def print_output_communication(output, file_):
    for status in output:
        print(status.decode())


def execute_in_shell(command, file_, input_='', stdin=None):
    p = Popen([command, file_], stdout=PIPE, stdin=PIPE, stderr=PIPE) 
    print_output_communication(p.communicate(input=input_.encode()), file_)

