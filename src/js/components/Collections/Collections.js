// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CollectionCard from '../CollectionCard';
import Button from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';

const Container = styled.div`
    width: 100%;
`;

const Header = styled.section`
    width: 100%;
    background-color: ${colors.white};
    padding: 48px 72px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Info = styled.div`
    max-width: 500px;
    & h1 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 24px;
        display: block;
        letter-spacing: -.04em;
    }
    & p {
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 40px;
        display: block;
        line-height: 1.48;
    }
`;

const Stats = styled.div`
    & div {
        display: inline-block;
        margin-right: 20px;
    }
    & h3 {
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 8px;
        display: block;
    }
    & h5 {
        font-size: 14px;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: 8px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 20px;
`;

const Grid = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & a {
        margin: 8px;
    }
`;

class Collections extends Component {
    static propTypes = {
        data: PropTypes.shape({
            loading: PropTypes.bool,
            groves: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                description: PropTypes.string
            }))
        }).isRequired
    };
    static defaultProps = {};
    constructor() {
        super();
        this.state = {
            showAdd: false,
            collections: 0,
            cards: 0,
            members: 0
        };
    }
    renderCollections = () => {
        const { data } = this.props;

        if (data.loading) return <div>LOADING</div>

        if (!data.loading && data.groves) {
            return (
                <Grid>
                    {data.groves.map(grove =>
                        <Link to={`/collection/${grove.id}`} key={grove.id}>
                            <CollectionCard name={grove.name} description={grove.description} />
                        </Link>
                    )}
                </Grid>
            );
        }

        return null;
    }
    render() {
        const { showAdd, collections, cards, members } = this.state;
        const { data } = this.props;
        return (
            <Container>
                <Header>
                    <Info>
                        <h1>Collections</h1>
                        <p>A collection of useful articles, work, notes & anything else needed to stimulate collective learning.</p>
                        <Stats>
                            <div>
                                <h3>{collections}</h3>
                                <h5>Collections</h5>
                            </div>
                            <div>
                                <h3>{cards}</h3>
                                <h5>Cards</h5>
                            </div>
                            <div>
                                <h3>{collections}</h3>
                                <h5>Teammates</h5>
                            </div>
                        </Stats>
                    </Info>
                    <ButtonGroup>
                        <Button
                            onClick={() => this.setState({ showAdd: true })}
                            text="Add Collection"
                            type="primary"
                        />
                        {showAdd &&
                            <CollectionDialog
                                close={() => {
                                    data.refetch();
                                    this.setState({ showAdd: false });
                                }}
                            />
                        }
                    </ButtonGroup>
                </Header>
                {this.renderCollections()}
            </Container>
        );
    }
}

export default Collections;
