import os
import re

def extract_day_number(filename):
    """Extract the number after 'DAY_' and before the next underscore."""
    match = re.search(r'DAY_(\d+)_', filename)
    return int(match.group(1)) if match else float('inf')  # Use inf if no match

def generate_files_txt_for_subfolders(root_folder):
    for foldername, subfolders, filenames in os.walk(root_folder):
        if foldername == root_folder:
            continue

        # Exclude 'files.txt' and non-files
        only_files = [
            f for f in filenames
            if f.lower() != 'files.txt' and os.path.isfile(os.path.join(foldername, f))
        ]

        # Sort files based on DAY_#### number
        sorted_files = sorted(only_files, key=extract_day_number)

        txt_path = os.path.join(foldername, 'files.txt')
        with open(txt_path, 'w') as f:
            for file in sorted_files:
                f.write(file + '\n')

        print(f"Written sorted files.txt in: {foldername}")

# Example usage:
generate_files_txt_for_subfolders("M_SPIN")