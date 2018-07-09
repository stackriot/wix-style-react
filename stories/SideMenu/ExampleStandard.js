import React from 'react';

import {
  SideMenu,
  Button,
  Tooltip
} from 'wix-style-react';

import {
  PenOutline,
  Chat as ChatIcon,
  Preview
} from 'wix-style-react/Icons';

export default () =>
  <div style={{width: 220, height: 700}}>
    <SideMenu>
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

      <SideMenu.Navigation>
        <SideMenu.NavigationLink onClick={() => console.log('Dashboard clicked')}>
          Dashboard
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink onClick={() => console.log('Rest. Menus clicked')}>
          Rest. Menus
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink withArrow onClick={() => console.log('Rest. Products clicked')}>
          Rest. Products
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink isActive onClick={() => console.log('Store Orders clicked')}>
          Store Orders
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink withArrow onClick={() => console.log('Contacts & CRM clicked')}>
          Contacts & CRM
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink withArrow onClick={() => console.log('Marketing Tools clicked')}>
          Marketing Tools
        </SideMenu.NavigationLink>

        <SideMenu.NavigationSeparator/>

        <SideMenu.NavigationLink onClick={() => console.log('Manage Website clicked')}>
          Manage Website
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink badge={<SideMenu.NavigationBadge/>} onClick={() => console.log('Settings clicked')}>
          Settings
        </SideMenu.NavigationLink>
        <SideMenu.NavigationLink onClick={() => console.log('Apps clicked')}>
          Apps
        </SideMenu.NavigationLink>

        <SideMenu.NavigationLink
          href="https://academy.wix.com/en/seo"
          target="_blank"
          isDiminishedHover
          >
          Dim Hover link #1
        </SideMenu.NavigationLink>
      </SideMenu.Navigation>

      <SideMenu.Promotion>
        <Button
          theme="fullpurple"
          onClick={() => console.log('Promotion button clicked!')}
          >
          Upgrade
        </Button>
      </SideMenu.Promotion>

      <SideMenu.NavigationSeparator/>

      <SideMenu.Footer>
        <SideMenu.FooterLink
          href="https://support.wix.com/"
          target="_blank"
          icon={<PenOutline size="1em"/>}
          >
          Edit
        </SideMenu.FooterLink>

        <SideMenu.FooterTinyLink
          href="https://support.wix.com/en/article/wix-seo-wiz-suggestions-and-feedback"
          target="_blank"
          icon={<div style={{marginTop: 2}}><ChatIcon size="1em"/></div>}
          tooltip="Hey, come talk to me!"
          onClick={() => console.log('clicked on tiny link yay!')}
          />
      </SideMenu.Footer>
    </SideMenu>
  </div>;

