import React from 'react';
import {Alert, Col, Container, Row, Table} from 'react-bootstrap';

import Cell from './Cell'

const state = [[0,'x',0], ['x',0,0], [0,0,0]]

const setCell = (cellValue) => {
    if (cellValue === 0) {
        return <Cell />
    } else {
        return <Cell value={cellValue} />
    }
}

const GameBoard = (props) => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Alert.Heading variant='dark'>Tic-Tac-Toe</Alert.Heading>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Table bordered>
                    {state.map(row => (
                        <tr>
                            {row.map(cell => setCell(cell))}
                        </tr>
                    ))}
                </Table>
            </Row>
        </Container>
    )
}

export default GameBoard;
