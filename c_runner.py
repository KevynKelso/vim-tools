from subprocess import Popen, PIPE

from functions_common import execute_and_print_in_shell, print_output_communication


def run_c_code(filename):
    execute_and_print_in_shell('gcc', filename)

    p = Popen(['./a.out'], stdout=PIPE, stdin=PIPE, stderr=PIPE)
    print_output_communication(p.communicate(), filename)
