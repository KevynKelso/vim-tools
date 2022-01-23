import sys
from os.path import basename

from c_runner import run_c_code
from c_sharp_runner import run_c_sharp_code
from cpp_runner import run_cpp_code
from go_runner import run_go_code
from java_runner import run_java_code
from python_runner import run_python_code
from tsx_formatter import format_tsx
from verilog_runner import run_verilog_code


def run_code():
    file_to_run = sys.argv[1]  # See vimrc
    function_lookup = {
        "java": run_java_code,
        "py": run_python_code,
        "v": run_verilog_code,
        "go": run_go_code,
        "tsx": format_tsx,
        "cs": run_c_sharp_code,
        "c": run_c_code,
        "cpp": run_cpp_code,
    }

    file_extension = basename(file_to_run).split(".")[-1]
    if file_extension not in function_lookup.keys():
        print("This file type is not supported")
        return

    print(f"Running: {basename(file_to_run)}")
    function_lookup[file_extension](file_to_run)


if __name__ == "__main__":
    run_code()
