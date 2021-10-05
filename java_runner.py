import subprocess

from os.path import exists, splitext
from pathlib import Path

from functions_common import execute_and_print_in_shell


def read_input_file(input_file):
    with open(input_file, 'r') as f:
        return f.read()


def get_input_sequence_file_from_parent(input_file):
    parent = Path(input_file).parents[0]
    return f'{parent}/input_sequence.txt'


def get_input_sequence_file_from_grandparent(input_file):
    grandparent = Path(input_file).parents[1]
    return f'{grandparent}/input_sequence.txt'


def check_for_multi_runs(input_sequence):
    return input_sequence.split('New:\n')


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


def run_java_code(java_file):
    compile_java(java_file)
    java_input = get_input_from_file(java_file)
    java_input = check_for_multi_runs(java_input)

    for input_sequence in java_input:
        print('INPUT:\n', input_sequence)
        print('==================== PROGRAM OUTPUT ====================')
        execute_and_print_in_shell('java', java_file, input_sequence)

