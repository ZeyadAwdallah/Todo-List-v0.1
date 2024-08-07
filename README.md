# Todo-List-v0.1

---

### Overview
This application is a to-do list tool developed using vanilla JavaScript. It allows users to add, edit, delete, and toggle the completion status of tasks. The tasks are stored in local storage and are reloaded when the page is accessed. The application features modals for editing tasks and confirming deletions, and includes functionalities to mark all tasks as completed or delete all completed tasks.

### Features
- **Add Tasks**: Add new tasks by entering them into the input field and pressing Enter.
- **Edit Tasks**: Modify existing tasks through an edit modal.
- **Delete Tasks**: Remove tasks with a delete confirmation modal.
- **Mark Tasks as Done/Not Done**: Toggle the status of tasks by clicking on the task or the respective button.
- **Complete All Tasks**: Mark all tasks as completed with a single click.
- **Delete Completed Tasks**: Remove all tasks that are marked as done.

### Technologies Used
- **Vanilla JavaScript**: The application is built using plain JavaScript without any external libraries or frameworks.
- **HTML/CSS**: For structuring and styling the user interface.

### Variables

- `documentTasks`: Reference to the HTML element where tasks are displayed.
- `input`: Reference to the input field for adding new tasks.
- `completeAll`: Reference to the button that marks all tasks as done.
- `deleteComplete`: Reference to the button that deletes all completed tasks.
- `editModal`: Reference to the modal used for editing tasks.
- `editInput`: Reference to the input field in the edit modal.
- `closeEditModal`: Reference to the button to close the edit modal.
- `saveEdit`: Reference to the button to save changes in the edit modal.
- `deleteModal`: Reference to the modal used for confirming task deletions.
- `deleteTaskText`: Reference to the text element in the delete modal showing the task to be deleted.
- `closeDeleteModal`: Reference to the button to close the delete modal.
- `confirmDelete`: Reference to the button to confirm task deletion.

### Functions

- **`storeTasks()`**
  - **Description**: Saves the current tasks array to local storage.
  - **Usage**: Called after adding, updating, or deleting tasks.

- **`getTasks()`**
  - **Description**: Retrieves tasks from local storage and populates the tasks array.
  - **Usage**: Called on page load to initialize tasks.

- **`fill()`**
  - **Description**: Updates the task list display based on the tasks array.
  - **Usage**: Called after modifying tasks to refresh the display.

- **`addTask(title)`**
  - **Description**: Adds a new task with the given title to the tasks array.
  - **Parameters**: `title` - The title of the new task.
  - **Usage**: Called when a user presses Enter in the input field.

- **`openDeleteModal(index, event)`**
  - **Description**: Opens the delete confirmation modal for the task at the given index.
  - **Parameters**: `index` - The index of the task to delete. `event` - The click event object.
  - **Usage**: Called when a user clicks the delete button for a task.

- **`deleteTask()`**
  - **Description**: Deletes the currently selected task from the tasks array.
  - **Usage**: Called when the user confirms task deletion.

- **`openEditModal(index, event)`**
  - **Description**: Opens the edit modal for the task at the given index.
  - **Parameters**: `index` - The index of the task to edit. `event` - The click event object.
  - **Usage**: Called when a user clicks the edit button for a task.

- **`updateTask()`**
  - **Description**: Updates the title of the currently selected task.
  - **Usage**: Called when the user saves changes in the edit modal.

- **`doneOrNot(index, event)`**
  - **Description**: Toggles the done status of the task at the given index.
  - **Parameters**: `index` - The index of the task. `event` - The click event object.
  - **Usage**: Called when a user clicks the done or redo button.

- **`toggleTask(index)`**
  - **Description**: Toggles the done status of the task at the given index when the task itself is clicked.
  - **Parameters**: `index` - The index of the task.
  - **Usage**: Called when a user clicks on the task.

### Event Listeners

- **Enter Key in Input Field**
  - **Description**: Adds a new task when the Enter key is pressed.
  - **Usage**: Attaches to the input field.

- **Complete All Button**
  - **Description**: Marks all tasks as completed.
  - **Usage**: Attaches to the "Complete All" button.

- **Delete Completed Button**
  - **Description**: Deletes all tasks that are marked as completed.
  - **Usage**: Attaches to the "Delete Completed" button.

- **Close Edit Modal Button**
  - **Description**: Closes the edit modal.
  - **Usage**: Attaches to the close button in the edit modal.

- **Save Edit Button**
  - **Description**: Saves changes made to a task in the edit modal.
  - **Usage**: Attaches to the save button in the edit modal.

- **Close Delete Modal Button**
  - **Description**: Closes the delete confirmation modal.
  - **Usage**: Attaches to the close button in the delete modal.

- **Confirm Delete Button**
  - **Description**: Confirms and executes the task deletion.
  - **Usage**: Attaches to the confirm button in the delete modal.

### Usage

1. **Adding Tasks**: Type a task in the input field and press Enter to add it to the list.
2. **Editing Tasks**: Click "Edit" on a task to modify it. Save changes in the edit modal.
3. **Deleting Tasks**: Click "Delete" on a task to open the delete modal. Confirm deletion in the modal.
4. **Marking Tasks**: Click "Done" to mark a task as completed, or "Redo" to revert it.
5. **Completing All Tasks**: Click "Complete All" to mark all tasks as done.
6. **Deleting Completed Tasks**: Click "Delete Completed" to remove all tasks that are marked as done.

---
