/* ==========================================
   1. DISPLAY INFORMATION CARDS
========================================== */

// Select all information buttons

const infoButtons = document.querySelectorAll(".info-button");

// Add click event to each button

infoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the target card ID

        const targetId = button.getAttribute("data-target");

        const details = document.getElementById(targetId);

        // Toggle the information card

        details.classList.toggle("show");

        // Change button text

        if (details.classList.contains("show")) {

            button.textContent = "Hide Details";

        } else {

            button.textContent = "View Details";

        }

    });

});


/* ==========================================
   2. DISPLAY SYSTEM NOTIFICATION
========================================== */

const notifyButton = document.getElementById("notifyButton");

const notification = document.getElementById("notification");

const notificationText = document.getElementById("notificationText");

notifyButton.addEventListener("click", function() {

    // Display notification message

    notificationText.textContent =
        "Automation system is running successfully!";

    // Add notification animation class

    notification.classList.add("show");

    // Hide notification after 3 seconds

    setTimeout(function() {

        notification.classList.remove("show");

    }, 3000);

});


/* ==========================================
   3. OPEN AND CLOSE PROCESS INFORMATION
========================================== */

const toggleButton = document.getElementById("toggleButton");

const processDetails = document.getElementById("processDetails");

toggleButton.addEventListener("click", function() {

    // Toggle process information visibility

    processDetails.classList.toggle("show");

    // Update button text

    if (processDetails.classList.contains("show")) {

        toggleButton.textContent = "Hide Process Information";

    } else {

        toggleButton.textContent = "Show Process Information";

    }

});


/* ==========================================
   4. NAVIGATION CLICK ANIMATION
========================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        link.classList.add("nav-clicked");

        setTimeout(function() {

            link.classList.remove("nav-clicked");

        }, 500);

    });

});


/* ==========================================
   5. PAGE LOADING ANIMATION
========================================== */

window.addEventListener("load", function() {

    document.body.classList.add("page-loaded");

});
/* ==========================================
   6. DYNAMIC INDUSTRIAL INFORMATION MANAGER
========================================== */

// Get HTML elements using getElementById()

const infoTitle = document.getElementById("infoTitle");

const infoCategory = document.getElementById("infoCategory");

const infoDescription = document.getElementById("infoDescription");

const saveInfoButton = document.getElementById("saveInfoButton");

const informationList = document.getElementById("informationList");

const recordCount = document.getElementById("recordCount");

const emptyMessage = document.getElementById("emptyMessage");

const formMessage = document.getElementById("formMessage");

// Store the currently edited information card

let currentEditingItem = null;


/* ==========================================
   7. UPDATE DISPLAY INFORMATION
========================================== */

function updateDisplay() {

    // Update the total number of records

    recordCount.textContent = informationList.children.length;

    // Display message when the list is empty

    if (informationList.children.length === 0) {

        emptyMessage.innerHTML =
            "<span>No information has been added yet.</span>";

    } else {

        emptyMessage.innerHTML = "";

    }

}


/* ==========================================
   8. CREATE AND ADD INFORMATION
========================================== */

function addInformation(title, category, description) {

    // Create a new list item

    const listItem = document.createElement("li");

    listItem.setAttribute("class", "information-item");


    // Create the title element

    const titleElement = document.createElement("span");

    titleElement.setAttribute("class", "record-title");

    titleElement.textContent = title;


    // Create the category element

    const categoryElement = document.createElement("span");

    categoryElement.setAttribute("class", "record-category");

    categoryElement.textContent = category;


    // Create the description element

    const descriptionElement = document.createElement("p");

    descriptionElement.setAttribute("class", "record-description");

    descriptionElement.textContent = description;


    // Create the button container

    const actionContainer = document.createElement("div");

    actionContainer.setAttribute("class", "record-actions");


    // Create the Edit button

    const editButton = document.createElement("button");

    editButton.setAttribute("type", "button");

    editButton.setAttribute("class", "edit-button");

    editButton.textContent = "Edit";


    // Create the Delete button

    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("type", "button");

    deleteButton.setAttribute("class", "delete-button");

    deleteButton.textContent = "Delete";


    // Add edit and delete buttons to the container

    actionContainer.appendChild(editButton);

    actionContainer.appendChild(deleteButton);


    // Add all elements to the list item

    listItem.appendChild(titleElement);

    listItem.appendChild(categoryElement);

    listItem.appendChild(descriptionElement);

    listItem.appendChild(actionContainer);


    // Add the completed information card to the webpage

    informationList.appendChild(listItem);


    /* ==========================================
       EDIT INFORMATION
    ========================================== */

    editButton.addEventListener("click", function() {

        // Get existing information using querySelector()

        const selectedTitle =
            listItem.querySelector(".record-title").textContent;

        const selectedCategory =
            listItem.querySelector(".record-category").textContent;

        const selectedDescription =
            listItem.querySelector(".record-description").textContent;


        // Place existing information into the input fields

        infoTitle.value = selectedTitle;

        infoCategory.value = selectedCategory;

        infoDescription.value = selectedDescription;


        // Store the selected card for modification

        currentEditingItem = listItem;

        // Change button text

        saveInfoButton.textContent = "Update Information";

        formMessage.textContent =
            "Editing selected industrial information.";

    });


    /* ==========================================
       DELETE INFORMATION
    ========================================== */

    deleteButton.addEventListener("click", function() {

        // Remove the selected information card

        listItem.remove();


        // Reset editing mode if this card was being edited

        if (currentEditingItem === listItem) {

            currentEditingItem = null;

            saveInfoButton.textContent = "Add Information";

            clearForm();

        }


        // Update record count and empty message

        updateDisplay();

        formMessage.textContent =
            "Industrial information deleted successfully.";

    });


    // Update display after adding a record

    updateDisplay();

}


/* ==========================================
   9. CLEAR INPUT FIELDS
========================================== */

function clearForm() {

    infoTitle.value = "";

    infoCategory.value = "";

    infoDescription.value = "";

}


/* ==========================================
   10. ADD OR MODIFY INFORMATION
========================================== */

saveInfoButton.addEventListener("click", function() {

    // Read values entered by the user

    const title = infoTitle.value.trim();

    const category = infoCategory.value.trim();

    const description = infoDescription.value.trim();


    // Validate input fields

    if (title === "" || category === "" || description === "") {

        formMessage.textContent =
            "Please fill in all the information fields.";

        return;

    }


    // Check whether the user is adding or modifying information

    if (currentEditingItem !== null) {

        // Modify existing information

        currentEditingItem.querySelector(".record-title").textContent =
            title;

        currentEditingItem.querySelector(".record-category").textContent =
            category;

        currentEditingItem.querySelector(".record-description").textContent =
            description;


        formMessage.textContent =
            "Industrial information updated successfully.";

        currentEditingItem = null;

        saveInfoButton.textContent = "Add Information";

    } else {

        // Add a new information card

        addInformation(title, category, description);

        formMessage.textContent =
            "New industrial information added successfully.";

    }


    // Clear input fields

    clearForm();


    // Refresh the displayed record count

    updateDisplay();

});


/* ==========================================
   11. INITIAL DISPLAY
========================================== */

updateDisplay();

// INDUSTRIAL AUTOMATION FORM VALIDATION

const enquiryForm = document.getElementById("enquiryForm");

const validationMessage =
    document.getElementById("validationMessage");

const clientName = document.getElementById("clientName");
const phone = document.getElementById("phone");
const requirements = document.getElementById("requirements");

// Custom validation for client name
clientName.addEventListener("input", function () {
    if (clientName.value.trim().length < 3) {
        clientName.setCustomValidity(
            "Name must contain at least 3 characters."
        );
    } else {
        clientName.setCustomValidity("");
    }
});

// Custom validation for phone number
phone.addEventListener("input", function () {
    if (!/^[0-9]{10}$/.test(phone.value)) {
        phone.setCustomValidity(
            "Please enter a valid 10-digit phone number."
        );
    } else {
        phone.setCustomValidity("");
    }
});

// Custom validation for project description
requirements.addEventListener("input", function () {
    if (requirements.value.trim().length < 10) {
        requirements.setCustomValidity(
            "Description must contain at least 10 characters."
        );
    } else {
        requirements.setCustomValidity("");
    }
});

// Form submission event
enquiryForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Check form validity
    if (!enquiryForm.checkValidity()) {

        // Display browser validation messages
        enquiryForm.reportValidity();

        validationMessage.textContent =
            "Please correct the errors before submitting.";

        validationMessage.className = "error";

        return;
    }

    // Display success message
    validationMessage.textContent =
        "Your industrial automation enquiry has been submitted successfully!";

    validationMessage.className = "success";

    // Clear the form after successful submission
    enquiryForm.reset();

    // Reset custom validation messages
    clientName.setCustomValidity("");
    phone.setCustomValidity("");
    requirements.setCustomValidity("");
});

// Clear message when the form is reset
enquiryForm.addEventListener("reset", function () {
    validationMessage.textContent = "";
    validationMessage.className = "";
});

// INDUSTRIAL AUTOMATION API INTEGRATION

const loadDataButton =
    document.getElementById("loadDataButton");

const loadingMessage =
    document.getElementById("loadingMessage");

const tableBody =
    document.getElementById("automationTableBody");

const dataStatus =
    document.getElementById("dataStatus");

// Function to retrieve data from the API
async function fetchAutomationData() {

    // Display loading message
    loadingMessage.textContent = "Loading automation data...";
    dataStatus.textContent = "";
    dataStatus.className = "loading";

    loadDataButton.disabled = true;

    try {

        // Fetch JSON data from the API
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );

        // Check whether the request was successful
        if (!response.ok) {
            throw new Error("Unable to retrieve data from the server.");
        }

        // Convert the response into JSON
        const data = await response.json();

        // Clear previous table records
        tableBody.textContent = "";

        // Display the received JSON data
        data.forEach(function (item) {

            // Create a new table row
            const row = document.createElement("tr");

            // Create table cells
            const reportId = document.createElement("td");
            const plantId = document.createElement("td");
            const reportTitle = document.createElement("td");
            const reportDetails = document.createElement("td");

            // Insert API values using textContent
            reportId.textContent = item.id;
            plantId.textContent = item.userId;
            reportTitle.textContent = item.title;
            reportDetails.textContent = item.body;

            // Add cells to the row
            row.appendChild(reportId);
            row.appendChild(plantId);
            row.appendChild(reportTitle);
            row.appendChild(reportDetails);

            // Add row to the table
            tableBody.appendChild(row);
        });

        // Display success message
        loadingMessage.textContent = "Data loaded successfully.";

        dataStatus.textContent =
            "Successfully retrieved " + data.length +
            " automation report records.";

        dataStatus.className = "success";

    } catch (error) {

        // Handle API or network errors
        tableBody.textContent = "";

        const errorRow = document.createElement("tr");
        const errorCell = document.createElement("td");

        errorCell.setAttribute("colspan", "4");

        errorCell.textContent =
            "Unable to load data. Please check your internet connection and try again.";

        errorRow.appendChild(errorCell);
        tableBody.appendChild(errorRow);

        loadingMessage.textContent = "Data loading failed.";

        dataStatus.textContent = error.message;
        dataStatus.className = "error";

    } finally {

        // Runs whether the request succeeds or fails
        loadDataButton.disabled = false;

    }
}

// Button click event
loadDataButton.addEventListener("click", fetchAutomationData);

// INDUSTRIAL AUTOMATION TASK MANAGER

// Get HTML elements
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskCategory = document.getElementById("taskCategory");
const taskPriority = document.getElementById("taskPriority");
const taskStatus = document.getElementById("taskStatus");

const taskList = document.getElementById("taskList");
const taskSummaryBody = document.getElementById("taskSummaryBody");
const taskMessage = document.getElementById("taskMessage");
const emptyTaskMessage = document.getElementById("emptyTaskMessage");

const formHeading = document.getElementById("formHeading");
const saveTaskButton = document.getElementById("saveTaskButton");
const cancelEditButton = document.getElementById("cancelEditButton");

// Retrieve tasks from Local Storage
let tasks = [];

try {
    tasks = JSON.parse(
        localStorage.getItem("industrialTasks")
    ) || [];

    if (!Array.isArray(tasks)) {
        tasks = [];
    }
} catch (error) {
    tasks = [];
}

// Track the task currently being edited
let editingTaskId = null;

// Save tasks to Local Storage
function saveTasks() {
    localStorage.setItem(
        "industrialTasks",
        JSON.stringify(tasks)
    );
}

// READ: Display all tasks
function displayTasks() {

    taskList.textContent = "";

    emptyTaskMessage.style.display =
        tasks.length === 0 ? "block" : "none";

    tasks.forEach(function(task) {

        const listItem = document.createElement("li");
        listItem.className = "task-item";
        listItem.dataset.id = task.id;

        const title = document.createElement("h4");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent =
            "Description: " + task.description;

        const category = document.createElement("p");
        category.textContent =
            "Category: " + task.category;

        const priority = document.createElement("p");
        priority.textContent =
            "Priority: " + task.priority;

        const status = document.createElement("p");
        status.textContent =
            "Status: " + task.status;

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-task";

        editButton.addEventListener("click", function() {
            editTask(task.id);
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-task";

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        // Update status button
        const statusButton = document.createElement("button");
        statusButton.textContent = "Next Status";
        statusButton.className = "status-task";

        statusButton.addEventListener("click", function() {
            updateTaskStatus(task.id);
        });

        // Create action container
        const actions = document.createElement("div");
        actions.className = "task-actions";

        actions.appendChild(editButton);
        actions.appendChild(statusButton);
        actions.appendChild(deleteButton);

        // Add elements to task card
        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(category);
        listItem.appendChild(priority);
        listItem.appendChild(status);
        listItem.appendChild(actions);

        taskList.appendChild(listItem);
    });

    displaySummary();
}

// CREATE: Add a new task or UPDATE an existing task
taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const titleValue = taskTitle.value.trim();
    const descriptionValue = taskDescription.value.trim();
    const categoryValue = taskCategory.value;
    const priorityValue = taskPriority.value;
    const statusValue = taskStatus.value;

    if (
        !titleValue ||
        !descriptionValue ||
        !categoryValue ||
        !priorityValue ||
        !statusValue
    ) {
        taskMessage.textContent =
            "Please fill in all fields.";
        return;
    }

    if (editingTaskId !== null) {

        // Find the task to update
        const existingTask = tasks.find(function(task) {
            return task.id === editingTaskId;
        });

        if (existingTask) {
            existingTask.title = titleValue;
            existingTask.description = descriptionValue;
            existingTask.category = categoryValue;
            existingTask.priority = priorityValue;
            existingTask.status = statusValue;
        }

        taskMessage.textContent =
            "Task updated successfully!";

    } else {

        // Create a new task
        const newTask = {
            id: Date.now(),
            title: titleValue,
            description: descriptionValue,
            category: categoryValue,
            priority: priorityValue,
            status: statusValue
        };

        // Add task to array
        tasks.push(newTask);

        taskMessage.textContent =
            "New task added successfully!";
    }

    saveTasks();
    displayTasks();
    resetTaskForm();
});

// EDIT: Load selected task into the form
function editTask(id) {

    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    taskTitle.value = task.title;
    taskDescription.value = task.description;
    taskCategory.value = task.category;
    taskPriority.value = task.priority;
    taskStatus.value = task.status;

    editingTaskId = id;

    formHeading.textContent = "Update Industrial Task";
    saveTaskButton.textContent = "Update Task";
    cancelEditButton.hidden = false;

    taskMessage.textContent = "Editing selected task.";

    taskForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// DELETE: Remove a task
function deleteTask(id) {

    // Find the task card in the webpage
    const taskCard = taskList.querySelector(
        '[data-id="' + id + '"]'
    );

    // Remove the card using remove()
    if (taskCard) {
        taskCard.remove();
    }

    // Remove the task from the array using filter()
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    if (editingTaskId === id) {
        resetTaskForm();
    }

    saveTasks();
    displayTasks();

    taskMessage.textContent =
        "Task deleted successfully!";
}

// UPDATE: Change task status
function updateTaskStatus(id) {

    const task = tasks.find(function(item) {
        return item.id === id;
    });

    if (!task) return;

    const statuses = [
        "Pending",
        "In Progress",
        "Completed"
    ];

    const currentIndex = statuses.indexOf(task.status);

    task.status = statuses[
        (currentIndex + 1) % statuses.length
    ];

    saveTasks();
    displayTasks();

    taskMessage.textContent =
        "Task status updated to " + task.status + ".";
}

// Display task summary
function displaySummary() {

    taskSummaryBody.textContent = "";

    const statuses = [
        "Pending",
        "In Progress",
        "Completed"
    ];

    statuses.forEach(function(status) {

        const count = tasks.filter(function(task) {
            return task.status === status;
        }).length;

        const row = document.createElement("tr");

        const statusCell = document.createElement("td");
        statusCell.textContent = status;

        const countCell = document.createElement("td");
        countCell.textContent = count;

        row.appendChild(statusCell);
        row.appendChild(countCell);

        taskSummaryBody.appendChild(row);
    });
}

// Reset the task form
function resetTaskForm() {

    taskForm.reset();

    editingTaskId = null;

    formHeading.textContent = "Add New Task";
    saveTaskButton.textContent = "Add Task";
    cancelEditButton.hidden = true;
}

// Cancel editing
cancelEditButton.addEventListener("click", function() {

    resetTaskForm();

    taskMessage.textContent =
        "Editing cancelled.";
});

// Load saved tasks when the webpage opens
displayTasks();

