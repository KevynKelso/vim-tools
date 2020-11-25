from utils_colors import bcolors


def failprint(string):
    print(
        f'{bcolors.FAIL}'
        f'{string}'
        f'{bcolors.ENDC}'
    )


def warningprint(string):
    print(
        f'{bcolors.WARNING}'
        f'{string}'
        f'{bcolors.ENDC}'
    )


def successprint(string):
    print(
        f'{bcolors.OKGREEN}'
        f'{string}'
        f'{bcolors.ENDC}'
    )


def boldprint(string):
    print(
        f'{bcolors.BOLD}'
        f'{string}'
        f'{bcolors.ENDC}'
    )


def blueprint(string):
    print(
        f'{bcolors.OKBLUE}'
        f'{string}'
        f'{bcolors.ENDC}'
    )
