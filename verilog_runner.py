import re

from functions_common import execute_in_shell, print_output_communication


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
    p = Popen(['iverilog', '-o', vvp_file, '-v', verilog_file], 
        stdout=PIPE, stdin=PIPE, stderr=PIPE)
    print_output_communication(p.communicate(), verilog_file)


def run_verilog_code(verilog_file):
    if verify_verilog_code(verilog_file):
        vvp_file = f'{verilog_file}vp'
        compile_verilog(vvp_file, verilog_file)
        execute_in_shell('vvp', vvp_file) 
