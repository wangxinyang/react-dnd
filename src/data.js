const initalData = {
  users: {
    'user-1': { id: 'user-1', name: 'David', role: 'Avid reader' },
    'user-2': { id: 'user-2', name: 'Rebecca', role: 'Casual reader' },
    'user-3': { id: 'user-3', name: 'Joe', role: 'Shop owner' },
    'user-4': { id: 'user-4', name: 'wang', role: 'CEO' },
    'user-5': { id: 'user-5', name: 'dong', role: 'admin' },
  },

  activities: {
    'activity-1': {
      id: 'activity-1',
      name: '卡片1',
    },
    'activity-2': {
      id: 'activity-2',
      name: '卡片2',
    },
    'activity-3': {
      id: 'activity-3',
      name: '卡片3',
    },
    'activity-4': {
      id: 'activity-4',
      name: '卡片4',
    },
    'activity-5': {
      id: 'activity-5',
      name: '卡片5',
    },
    'activity-6': {
      id: 'activity-6',
      name: '卡片6',
    },
  },

  goals: {
    'goal-1': {
      id: 'goal-1',
      name: '目标1',
      users: ['user-1', 'user-2', 'user-3'],
      activities: ['activity-1', 'activity-2', 'activity-3', 'activity-4'],
    },
    'goal-2': {
      id: 'goal-2',
      name: '目标2',
      users: ['user-4', 'user-5'],
      activities: ['activity-5', 'activity-6'],
    },
  },

  goalOrder: ['goal-1', 'goal-2'],
};

export default initalData;
