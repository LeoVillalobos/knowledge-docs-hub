export const routesDataScienceProjects = {
  text: 'Proyectos de Ciencia de Datos',
  collapsed: false,
  items: [
    {
      text: 'Python',
      collapsed: true,
      items: [
        {text:'Índice', link: '/pages/home/data_science_projects/intro_to_programming/index'},
        {text:'Aritmética y variables', link: '/pages/home/data_science_projects/intro_to_programming/arithmetic_and_variables'},
        {text:'Condiciones y declaraciones condicionales', link: '/pages/home/data_science_projects/intro_to_programming/conditions_conditional_statements'},
        {text:'Tipos de datos', link: '/pages/home/data_science_projects/intro_to_programming/data_types'},
        {text:'Funciones', link: '/pages/home/data_science_projects/intro_to_programming/functions'},
        {text:'Introducción a listas', link: '/pages/home/data_science_projects/intro_to_programming/intro_to_list'}
      ]
    },
    {
      text: 'Machine Learning',
      collapsed: false,
      items: [
        // {text:'Inicio', link: '/pages/home/data_science_projects/intro_to_machine_learning/index'},
        {text:'Cómo funcionan los modelos', link: '/pages/home/data_science_projects/intro_to_machine_learning/how_models_work'},
        {text:'Exploración básica de datos', link: '/pages/home/data_science_projects/intro_to_machine_learning/basic_data_exploracion'},
        {text:'Primer modelo de aprendizaje automático', link: '/pages/home/data_science_projects/intro_to_machine_learning/first_machine_learning_model'},
        {text:'Validación de modelos', link: '/pages/home/data_science_projects/intro_to_machine_learning/model_validation'},
        {text:'Subajuste y sobreajuste', link: '/pages/home/data_science_projects/intro_to_machine_learning/underfitting_and_overfitting'}
      ]
    }
  ]
}
