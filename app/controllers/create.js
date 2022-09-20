import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

const BACKEND_URL = 'http://localhost:3000';

export default class CreateController extends Controller {
  @tracked projectName;
  @tracked file;

  @service router;

  @action
  updateFile({
    target: {
      files: [file],
    },
  }) {
    this.file = file;
  }

  @action
  async createProject() {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('name', this.projectName);

    const res = fetch(`${BACKEND_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    const newProject = await res.json();

    this.router.transitionTo('projects', newProject.id);
  }
}
