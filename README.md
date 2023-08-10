# Angular Todo App with Firebase

This is a simple Angular todo app that uses Firebase as a backend database to manage tasks. The app includes CRUD (Create, Read, Update, Delete) operations and is styled using Bootstrap. It also features a modal confirmation for actions on individual todo items.

## Screenshots

### Home Page Component
![image](https://github.com/Aphiwe-Makisi/ang-todo-app/assets/103032013/353b34e1-0286-4231-82dd-bdcd624ba880)

### Add Todo Component
![image](https://github.com/Aphiwe-Makisi/ang-todo-app/assets/103032013/9ea82c61-798b-4666-8813-19091e7cc7d4)

### Archive Component
![image](https://github.com/Aphiwe-Makisi/ang-todo-app/assets/103032013/53450dbf-2914-4d43-adea-058351623777)

### View Todo Component (with Modal Confirmation)
![image](https://github.com/Aphiwe-Makisi/ang-todo-app/assets/103032013/7ec0e9b1-3060-4962-94c2-80845e3d95db)

## Features

- **Home Page**: Displays the list of active todos.
- **Add Todo**: Allows users to add new todo items.
- **Archive**: Shows archived todo items.
- **View Todo**: Displays details of a specific todo item and provides actions to complete, delete, or edit.
- **Modal Confirmation**: When performing actions (complete, delete, edit) on a todo item, a modal confirmation is presented to ensure the user's intent.

## How to Use

1. Clone this repository: `git clone https://github.com/your-username/angular-todo-firebase.git`
2. Install dependencies: `cd angular-todo-firebase && npm install`
3. Set up Firebase:
   - Create a Firebase project at https://firebase.google.com/
   - Add your Firebase configuration in `src/environments/environment.ts` and `src/environments/environment.prod.ts`.
4. Run the app: `ng serve`
5. Open the app in your browser: `http://localhost:4200`

## CRUD Operations

- **Create**: Use the "Add Todo" component to create new todo items.
- **Read**: The "Home Page" displays the list of active todos, and the "Archive" component shows archived items.
- **Update**: In the "View Todo" component, click the "Edit" button to update a todo item.
- **Delete**: In the "View Todo" component, click the "Delete" button to delete a todo item.

## Contributions

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.
