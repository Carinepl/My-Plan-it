import { HomePage } from './pages/HomePage'
import { TaskListPage } from './pages/TaskListPage'
import { TaskDetailsPage } from './pages/TaskDetailsPage'
import { CreateTaskPage } from './pages/CreateTaskPage'
import { SearchTaskPage } from './pages/SearchTaskPage'
import { Page } from './components/layout/navbar/page'

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={TaskListPage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
          <Route path="/create" element={<CreateTaskPage />} />
          <Route path='/search' element={<SearchTaskPage />} />
          </Route>
      </Routes>
      </Router>
    
  );
}
 