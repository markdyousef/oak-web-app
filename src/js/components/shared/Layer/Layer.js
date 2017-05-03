// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type DefaultProps = {}

type Props = {
    children?: Object,
    onClose: () => void
}

type State = {}

export default (WrappedComponent: Function) => {
    return (
        class Dropdown extends Component<DefaultProps, Props, State> {
            static defaultProps: DefaultProps;
            state: State;
            node: Object
            constructor(props: Props) {
                super(props);
                this.state = {};
            }
            componentDidMount() {
                document.addEventListener('click', this.handleClickEvent, true)
            }
            componentWillUnmount() {
                document.removeEventListener('click', this.handleClickEvent, true)
            }
            handleClickEvent = (event: Event) => {
                const { onClose } = this.props;
                const domNode = ReactDOM.findDOMNode(this);

                if (!domNode || !domNode.contains(event.target)) {
                    if (onClose) onClose();
                }
            }
            render() {
                const { children } = this.props;
                return (
                    <WrappedComponent>
                        {children && children}
                    </WrappedComponent>
                );
            }
        }
    );
};
