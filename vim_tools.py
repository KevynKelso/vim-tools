import sys

from os.path import basename

from go_runner import run_go_code
from java_runner import run_java_code
from python_runner import run_python_code
from tsx_formatter import format_tsx
from verilog_runner import run_verilog_code


def run_code():
    file_to_run = sys.argv[1] # See vimrc
    print(f'Running: {basename(file_to_run)}')

    if file_to_run.endswith('.java'):
        run_java_code(file_to_run)
        return

    elif file_to_run.endswith('.py'):
        run_python_code(file_to_run)
        return

    elif file_to_run.endswith('.v'):
        run_verilog_code(file_to_run)
        return

    elif file_to_run.endswith('.go'):
        run_go_code(file_to_run)
        return

    elif file_to_run.endswith('.tsx'):
        format_tsx(file_to_run)
        return

    print('This file type is not supported')


if __name__ == '__main__':
    run_code()

