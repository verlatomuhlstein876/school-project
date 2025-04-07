// Example of collaborative JavaScript code for sharing work between students

// Function to display the current state of tasks completed by each student
function showTasksCompletedByStudents() {
    const students = getStudents();
    let taskCompleteMap = {};

    students.forEach(student => {
        if (taskCompleteMap[student] === undefined) {
            taskCompleteMap[student] = { status: 'Completed', count: 0 };
        }

        if (taskCompleteMap[student].count >= 5) {
            delete taskCompleteMap[student];
        }
    });

    const tasks = getTasks();

    students.forEach(student => {
        if (!taskCompleteMap[student]) {
            return;
        }

        const completedTasks = Object.keys(taskCompleteMap).filter(key => key !== student);
        const incompleteTasks = tasks.filter(task => task.isStudentCompletion(taskCompleteMap, student));

        console.log(`Task for ${student} - Completed: ${completedTasks.length}`);
        console.log(`Incomplete tasks by ${student}: ${incompleteTasks.length}`);
    });
}

// Function to get students
function getStudents() {
    const students = [];
    // Add code here to populate the array of students

    return students;
}

// Function to get tasks (mock data)
function getTasks() {
    // Return mock data representing some tasks
    return [
        { isStudentCompletion: { completed: true, count: 3 }, id: 'task1' },
        { isStudentCompletion: { completed: false, count: 2 }, id: 'task2' }
    ];
}

// Function to display the current state of tasks completed by each student
function showTasksCompletedByStudents() {
    // Call the function and display the results
}
