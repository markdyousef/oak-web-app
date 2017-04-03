// @flow
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Card from '../Card';
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
    & button {
        margin-top: 5px;
    }
`;

const Grid = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
            grove: PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                description: PropTypes.string,
                stats: PropTypes.object
            }),
            seeds: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
                content: PropTypes.string,
                creatorId: PropTypes.string,
                labels: PropTypes.arrayOf(PropTypes.object),
                comments: PropTypes.arrayOf(PropTypes.object),
                updatedAt: PropTypes.string.isRequired
            }))
        }).isRequired
    }
    constructor() {
        super();
        this.state = {
            showEdit: false
        };
    }
    renderCards = () => {
        const { data, router, params } = this.props;

        if (data.loading) return <div>LOADING</div>;

        if (!data.loading && data.seeds) {
            return (
                <Grid>
                    {data.seeds.map(item =>
                        <Card
                            key={item.id}
                            content={JSON.parse(item.content)}
                            creator={item.creatorId}
                            labels={item.labels}
                            comments={item.comments}
                            updatedAt={item.updatedAt}
                            onShow={() => router.push(`collection/${params.collectionId}/card/${item.id}`)}
                        />
                    )}
                </Grid>
            );
        }

        return null;
    }
    renderInfo = () => {
        const { data } = this.props;

        if (data.loading) return <div>Loading </div>;

        const { name, description, stats } = data.grove;

        return (
            <Info>
                <h1>{name}</h1>
                <p>{description}</p>
                <Stats>
                    <div>
                        <h3>{stats.seeds}</h3>
                        <h5>Cards</h5>
                    </div>
                </Stats>
            </Info>
        );
    }
    render() {
        const { router, params, data } = this.props;
        const { showEdit } = this.state;
        return (
            <Container>
                <Header>
                    {this.renderInfo()}
                    <ButtonGroup>
                        <Button
                            onClick={() => router.push(`collection/${params.collectionId}/card`)}
                            text="Add Card"
                            type="primary"
                        />
                        <Button
                            onClick={() => this.setState({ showEdit: true })}
                            text="Edit Collection"
                        />
                        {showEdit &&
                            <CollectionDialog
                                close={() => {
                                    data.refetch();
                                    this.setState({ showEdit: false })
                                }}
                                name={data.grove.name}
                                description={data.grove.description}
                                editMode
                                id={data.grove.id}
                                router={router}
                            />
                        }
                    </ButtonGroup>
                </Header>
                {this.renderCards()}
            </Container>
        );
    }
}

export default CollectionDetail;
