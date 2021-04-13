import React from 'react';

import Task from './Task';

export default {
  conponent: Task,
  title: 'Task'
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updateAt: new Date(2021, 13, 0, 0, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.Task,
    state: 'TASK_PINNED',
  }
};

export const Achived = Template.bind({});
Achived.args = {
  task: {
    ...Default.args.Task,
    state: 'TASK_ACHived',
  }
}