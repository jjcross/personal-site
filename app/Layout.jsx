import React from 'react';
import styles from './layout.css';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			clickedColumn: null,
			clickedRow: null
		};
	}
	render() {
		let {children, ...other} = this.props;

		let childrenArr = React.Children.toArray(this.props.children);
		let sqrt = Math.sqrt(React.Children.count(this.props.children));
		let size = Math.round(sqrt);

		let backArrowContainerStyle = styles.backArrowContainer;
		if (this.state.backClear) {
			backArrowContainerStyle += ' ' + styles.backArrowClear;
		}

		return (
				<div className={styles.layout}>
					{ childrenArr.map((child, childIndex) => {
							if (typeof child === 'undefined') return;
							let childWithProps = React.cloneElement(child, {
								column: childIndex % size, 
								row: Math.floor(childIndex / size),
								size: size,
								clickedColumn: this.state.clickedColumn, 
								clickedRow: this.state.clickedRow,
								panelClick: this.panelClick,
								...other
							});
							return childWithProps;
					})}
				</div>
		);
	};
	panelClick = (clickedColumn, clickedRow, event) => {
		console.log(this.props);
		event.stopPropagation();
		this.props.closeFnStack.push(this.closeFn);
		this.setState({clickedColumn, clickedRow});
	};
	closeFn = () => {
		let clickedColumn = null,
			clickedRow = null;
		this.setState({clickedColumn, clickedRow});
	}
} 