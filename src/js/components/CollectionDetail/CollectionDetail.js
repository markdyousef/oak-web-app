// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Card from '../Card';
import Button from '../shared/Button';
import TopNav from '../TopNav'

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
`;

const Grid = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    & button {
        margin: 5px;
        background-color: none;
        border: 0;
        padding: 0;
    }
`;

class CollectionDetail extends Component {
    static propTypes = {
        params: PropTypes.shape({
            collectionId: PropTypes.string
        }).isRequired,
        router: PropTypes.shape({
            push: PropTypes.func
        }).isRequired,
        data: PropTypes.shape({
            loading: PropTypes.bool,
            seeds: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired
            }))
        }).isRequired
    }
    constructor() {
        super();
        this.state = {};
    }
    renderCards = () => {
        const { data, router, params } = this.props;

        if (data.loading) return <div>LOADING</div>

        if (!data.loading && data.seeds) {
            return (
                <Grid>
                    {data.seeds.map(item =>
                        <button
                            onClick={() => router.push(`collection/${params.collectionId}/card/${item.id}`)}
                            key={item.id}
                        >
                            <Card content={JSON.parse(item.content)} />
                        </button>
                    )}
                </Grid>
            )
        }

        return null;
    }
    render() {
        const { router, params } = this.props;

        return (
            <Container>
                <Header>
                    <Info>
                        <h1>Collections</h1>
                        <p>A collection of useful articles, work, notes & anything else needed to stimulate collective learning.</p>
                    </Info>
                    <ButtonGroup>
                        <Button
                            onClick={() => router.push(`collection/${params.collectionId}/card`)}
                            text="Add Card"
                            type="primary"
                        />
                    </ButtonGroup>
                </Header>
                {this.renderCards()}
            </Container>
        );
    }
}

export default CollectionDetail;
