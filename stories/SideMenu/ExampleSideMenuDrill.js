import React from 'react';
import {
  SideMenuDrill,
  SideMenu,
  Button,
  Tooltip
} from 'wix-style-react';
import {
  Help as HelpIcon,
  Chat as ChatIcon,
  Preview
} from 'wix-style-react/Icons';
let counter = 3;

const items = [
  {type: 'link', to: '//wix.com', title: 'link #0_1', disabled: true},
  {type: 'link', to: '//wix.com', title: 'link #0_2', badge: true, badgeTooltip: true},
  {type: 'menu', title: 'Sub Menu #1', disabled: true, items: [
    {type: 'link', to: '//wix.com', title: 'link #1_1'},
    {type: 'link', to: '//wix.com', title: 'link #1_2'},
    {type: 'link', to: '//wix.com', title: 'link #1_3', badge: true}
  ]},
  {type: 'menu', title: 'Sub Menu #2', badge: true, items: [
    {type: 'link', to: '//wix.com', title: 'link #2_1'},
    {type: 'link', to: '//wix.com', title: 'link #2_2'},
    {type: 'link', to: '//wix.com', title: 'link #2_3'},
    {type: 'menu', title: 'Sub Menu #2-3', items: [
      {type: 'link', to: '//wix.com', title: 'link #2-3_1'},
      {type: 'link', to: '//wix.com', title: 'link #2-3_2'},
      {type: 'link', to: '//wix.com', title: 'link #2-3_3'}
    ]}
  ]},
  {type: 'menu', title: 'Sub Menu #3', items: [
    {type: 'link', to: '//wix.com', title: 'link #3_1'},
    {type: 'link', to: '//wix.com', title: 'link #3_2'},
    {type: 'link', to: '//wix.com', title: 'link #3_3'}
  ]}
];

class ExampleSideMenuDrill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items
    };
  }

  selectMenu(items, link) {
    items.forEach(item => {
      item.isActive = (item === link);

      if (item.items) {
        this.selectMenu(item.items, link);
      }
    });
  }

  onMenuSelected(e, link) {
    e.preventDefault();
    const items = [...this.state.items];
    this.selectMenu(items, link);
    this.setState({items});
  }

  renderLink(link) {
    const {badge, badgeTooltip} = link;
    const badgeElement = badge && <SideMenu.NavigationBadge/>;
    const badgeElementWithTooltip = badgeTooltip ?
      (<Tooltip moveBy={{x: -23, y: 0}} placement="right" alignment="center" content="Hi there!">
        {badgeElement}
      </Tooltip>) : badgeElement;
    return (

      <SideMenuDrill.Link key={link.title} isActive={link.isActive} disabled={link.disabled}>
        <a href={link.to} onClick={e => this.onMenuSelected(e, link)}>
          {link.title}
          {badgeElementWithTooltip}
        </a>
      </SideMenuDrill.Link>

    );
  }

  renderMenu(menu) {
    const showCategory = menu.title !== 'Sub Menu #3';
    const {badge, badgeTooltip} = menu;
    const badgeElement = badge && <SideMenu.NavigationBadge/>;
    const element = badgeTooltip ?
      (<Tooltip moveBy={{x: -23, y: 0}} placement="right" alignment="center" content="Hi there!">
        {badgeElement}
      </Tooltip>) : badgeElement;

    return (
      <SideMenuDrill.SubMenu
        key={menu.title} menuKey={menu.title} title={menu.title} showCategory={showCategory} badge={element}
        disabled={menu.disabled}
        >
        {this.renderHeader()}
        <SideMenuDrill.Navigation>
          {this.renderNavigation(menu.items)}
        </SideMenuDrill.Navigation>
      </SideMenuDrill.SubMenu>
    );
  }

  renderNavigation(items) {
    return items.map(item => {
      if (item.type === 'link') {
        return this.renderLink(item);
      }

      if (item.type === 'menu') {
        return this.renderMenu(item);
      }

      return null;
    });
  }

  addItem() {
    const newItem = {type: 'link', to: '//wix.com', title: `link #0_${counter++}`};
    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  renderFooter() {
    return (
      <SideMenu.Footer>
        <SideMenu.FooterLink
          href="https://support.wix.com/"
          target="_blank"
          icon={<HelpIcon size="1em"/>}
          >
          Help Me!
        </SideMenu.FooterLink>

        <SideMenu.FooterTinyLink
          href="https://support.wix.com/en/article/wix-seo-wiz-suggestions-and-feedback"
          target="_blank"
          icon={<div style={{marginTop: 2}}><ChatIcon size="1em"/></div>}
          tooltip="Hey, come talk to me!"
          onClick={() => console.log('clicked on tiny link yay!')}
          />
      </SideMenu.Footer>
    );
  }

  renderHeader() {
    return (
      <SideMenu.Header>
        <div style={{padding: '26px 30px', fontSize: '20px', color: 'white'}}>
          <Tooltip
            content="wix-style-react"
            placement="bottom"
            alignment="left"
            dataHook="site-name-tooltip"
            maxWidth="250"
            >
            <div>
              <span style={{marginRight: '5px', fontSize: '20px'}}>wix-style-react</span>
              <Preview size={12}/>
            </div>
          </Tooltip>
          <div style={{marginTop: '5px', fontSize: '13px'}}>Role: Owner</div>
        </div>
      </SideMenu.Header>
    );
  }

  render() {
    const {items} = this.state;

    return (
      <div style={{width: 220, height: 700, display: 'flex'}}>
        <div style={{display: 'flex', flexGrow: 1}}>
          <SideMenuDrill inFlex stickyFooter={this.renderFooter()}>
            {this.renderHeader()}
            {this.renderNavigation(items)}
            <SideMenu.Promotion>
              <Button theme="fullpurple" onClick={() => console.log('Promotion button clicked!')}>
                Buy 1 for price of 2!
              </Button>
            </SideMenu.Promotion>
          </SideMenuDrill>
        </div>
      </div>
    );
  }
}


export default ExampleSideMenuDrill;
