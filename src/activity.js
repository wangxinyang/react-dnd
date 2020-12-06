import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div``;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActivityCard = styled.div`
  width: 100px;
  margin: 3px;
  height: 30px;
  border: 1px solid #e5e7eb;
  border-radius: 2px;
  text-align: center;
`;

export default class Activity extends Component {
  render() {
    return (
      <Card>
        <Draggable
          draggableId={this.props.activity.id}
          index={this.props.index}
        >
          {(provided, snapshot) => (
            <ActivityCard
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.activity.name}
            </ActivityCard>
          )}
        </Draggable>
      </Card>
    );
  }
}
