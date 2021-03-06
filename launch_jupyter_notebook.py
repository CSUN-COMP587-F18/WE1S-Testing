""" This script models the code in the WMS. It has the following
    workflow:

    1. Generate a query string.
    2. Insert that string in a template Jupyter notebook with a simple 
       text replace function. Save the notebook as a new file.
    3. Launch the new notebook. The query is now ready to execute.
"""

# The query generated by the WMS search function
query = '{"$and":[{"path":{"$regex":"^,Corpus,new_york_times\\-sample,"}}]}'

# The path to the template notebook file
template_path = os.path.join('app', 'jupyter_notebook_template.ipynb')

# Read the template notebook file
with open(template_path, 'r') as f:
    doc = f.read()

# Replace the template string USER_QUERy with the actual query
doc = doc.replace('USER_QUERY', query)

# Save a new notebook based on the modified template
file_path = os.path.join('app', 'WMS_query.ipynb')
with open(file_path, 'w') as f:
    f.write(doc)

# subprocess.call(['jupyter', 'notebook'])
""" Flask breaks if you try to start the notebook server.
    I haven't solved this. So start the server from the 
    command line and have it running in the background 
    with Flask. If Jupyter notebooks is running, `nbopen` 
    works fine.
"""

# Open the notebook. The user can then select Run All.
subprocess.run(['nbopen', file_path], stdout=subprocess.PIPE)
