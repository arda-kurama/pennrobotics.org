import subprocess
import sys

# THis code will install flask for the API
subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--upgrade', 'pip'])

subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'flask'])

subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'flask-cors'])


