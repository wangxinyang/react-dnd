import React, { Component } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Activity from './activity';

const Container = styled.div`
  width: 100%;
  margin: 8px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 100px;
  margin: 3px;
  height: 30px;
  border: 1px solid #e5e7eb;
  border-radius: 2px;
  text-align: center;
`;

// const Container = styled.div``;

export default class goal extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.goal.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div>
            <div style={{ flexGrow: '1' }}></div>
            <Container
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <User>
                {this.props.users.map((user, index) => (
                  <Card key={index}>{user.name}</Card>
                ))}
              </User>
              <Card>{this.props.goal.name}</Card>
              {/* <Droppable droppableId="activity">
                  {(provided, snapshot) => (
                    <Activity
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <Draggable
                        draggableId={this.props.goal.id}
                        index={this.props.index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {this.props.activities.map((activity, index) => (
                              <Card key={index}>{activity.name}</Card>
                            ))}
                          </div>
                        )}
                      </Draggable>
                      {provided.placeholder}
                    </Activity>
                  )}
                </Droppable> */}
              <Droppable droppableId={this.props.goal.id} type="ACTIVITY">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {this.props.activities.map((activity, index) => {
                      return (
                        <Activity
                          key={activity.id}
                          activity={activity}
                          index={index}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Container>
          </div>
        )}
      </Draggable>
    );
  }
}
