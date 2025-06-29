import os

def generate_files_txt_for_subfolders(root_folder):
    for foldername, subfolders, filenames in os.walk(root_folder):
        # Skip the root itself, only process subfolders
        if foldername == root_folder:
            continue

        # Filter out only files (ignore subfolders inside subfolder)
        only_files = [f for f in filenames if os.path.isfile(os.path.join(foldername, f))]

        # Write to files.txt in this folder
        txt_path = os.path.join(foldername, 'files.txt')
        with open(txt_path, 'w') as f:
            for file in only_files:
                f.write(file + '\n')

        print(f"Written files.txt in: {foldername}")

# Example usage:
generate_files_txt_for_subfolders("M_SPIN")