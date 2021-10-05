from subprocess import Popen, PIPE

from functions_common import print_output_communication


def run_go_code(go_file):
    p = Popen(['go', 'run', '.'], stdout=PIPE, stdin=PIPE, stderr=PIPE)
    print_output_communication(p.communicate(), go_file)

