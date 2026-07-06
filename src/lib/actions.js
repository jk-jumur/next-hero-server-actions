export const createATask = (formData) => {
      'use server';
      const name = formData.get('name');
      console.log("Adding a task with name", name);
}