import Route from '@ember/routing/route';

const BACKEND_URL = 'http://localhost:3000';


export default class ProjectsIdRoute extends Route {
    async model ({id}) {
        const res = await fetch(`${BACKEND_URL}/projects/${id}`)
        
        return res.json()
    }
}
