import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import '../stylesheets/specific/welcome.scss'

export default class Welcome extends React.Component {
  	render() {
		return (
	  		<div className='welcome'>
				<br/>
				
				<ReactTooltip place='right' type='info' effect='float'/>
	  		</div>
		);
  	}
}

Welcome.defaultProps = {
	mainTitle: 'This webpage is made for CSL token and dApps.',
	cslTokenTestNet: 'https://testnet.bscscan.com/token/0x9F36c365ba7F247A84c65716Ba8d7FB957AfD8Ad',
	cslTokenMainNet: 'To be continue',
	tokenName: 'Cocker Spaniel',
	ticker: 'CSL',
	maxSupply: '1B / CSL cannot be minted. The total supply is fixed at 1B.',
	csldApp: 'To be continue',
	github_link: 'https://github.com/holylance/LunaPapaHomepage'
}

Welcome.propTypes = {
	mainTitle: PropTypes.string,
	cslTokenTestNet: PropTypes.string,
	cslTokenMainNet: PropTypes.string,
	tokenName: PropTypes.string,
	ticker: PropTypes.string,
	maxSupply: PropTypes.string,
	csldApp: PropTypes.string,
	github_link: PropTypes.string
}
