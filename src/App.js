import styled from 'styled-components';
import initalData from './data';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Goal from './goal';
import React, { Component } from 'react';

const Container = styled.div`
  display: flex;
  width: auto;
`;

class App extends Component {
  state = initalData;

  // 拖拽完之后的回调
  onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // 整个组拖拽
    if ('DEFAULT' === type) {
      this.state.goalOrder.splice(source.index, 1);
      this.state.goalOrder.splice(destination.index, 0, draggableId);
    }
    // activity拖拽
    if ('ACTIVITY' === type) {
      const start = this.state.goals[source.droppableId];
      const finish = this.state.goals[destination.droppableId];
      if (start === finish) {
        const newActivityIds = Array.from(start.activities);
        newActivityIds.splice(source.index, 1);
        newActivityIds.splice(destination.index, 0, draggableId);
        const newGoal = {
          ...start,
          activities: newActivityIds,
        };
        const newState = {
          ...this.state,
          goals: {
            ...this.state.goals,
            [newGoal.id]: newGoal,
          },
        };
        this.setState(newState);
        return;
      }
      // Moving from one list to another
      const startActivityIds = Array.from(start.activities);
      startActivityIds.splice(source.index, 1);
      const newStart = {
        ...start,
        activities: startActivityIds,
      };

      const finishActivityIds = Array.from(finish.activities);
      finishActivityIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        activities: finishActivityIds,
      };

      const newState = {
        ...this.state,
        goals: {
          ...this.state.goals,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      this.setState(newState);
    }
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="goal">
          {(provided, snapshot) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {this.state.goalOrder.map((taskId, index) => {
                const goal = this.state.goals[taskId];
                const users = goal.users.map(
                  (userId) => this.state.users[userId]
                );
                const activities = goal.activities.map(
                  (activityId) => this.state.activities[activityId]
                );

                return (
                  <Goal
                    key={goal.id}
                    goal={goal}
                    users={users}
                    activities={activities}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default App;
