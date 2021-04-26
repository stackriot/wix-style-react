import React from 'react';
import Badge from 'wix-ui-icons-common/Badge';

import SidebarSectionItem from '../SidebarSectionItem';
import sidebarSectionItemPrivateDriverFactory from './SidebarSectionItem.private.uni.driver';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

describe('SidebarSectionItem', () => {
  const render = createRendererWithUniDriver(
    sidebarSectionItemPrivateDriverFactory,
  );
  const sampleText = 'Some text';

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <SidebarSectionItem>{sampleText}</SidebarSectionItem>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.hasPrefix()).toBe(false);
    expect(await driver.hasSuffix()).toBe(false);
    expect(await driver.isDisabled()).toBe(false);
    expect(await driver.isSelected()).toBe(false);
  });

  it('should render the text when passing `children` prop', async () => {
    const { driver } = render(
      <SidebarSectionItem>{sampleText}</SidebarSectionItem>,
    );

    expect(await driver.getText()).toBe(sampleText);
  });

  it('should invoke `onClick` when clicking', async () => {
    const onClick = jest.fn();
    const { driver } = render(
      <SidebarSectionItem onClick={onClick}>{sampleText}</SidebarSectionItem>,
    );

    await driver.click();

    expect(onClick).toBeCalled();
  });

  it('should render the chevron when passing `drillable` and hovering', async () => {
    const { driver } = render(
      <SidebarSectionItem drillable>{sampleText}</SidebarSectionItem>,
    );

    await driver.hover();

    expect(await driver.hasChevron()).toBe(true);
  });

  it('should render the chevron when passing `drillable` and `alwaysDisplayChevron` without hover', async () => {
    const { driver } = render(
      <SidebarSectionItem drillable alwaysDisplayChevron>
        {sampleText}
      </SidebarSectionItem>,
    );

    expect(await driver.hasChevron()).toBe(true);
  });

  it('should driver return isSelect() if it\'s is', async() => {
    const {driver} = render(
      <SidebarSectionItem selected={true}>
        {sampleText}
      </SidebarSectionItem>
    );

    expect(await driver.isSelected()).toBe(true);
  })

  describe('Disabled', () => {
    it('should not invoke `onClick` when clicking', async () => {
      const onClick = jest.fn();
      const { driver } = render(
        <SidebarSectionItem disabled onClick={onClick}>
          {sampleText}
        </SidebarSectionItem>,
      );

      await driver.click();

      expect(onClick).not.toBeCalled();
    });

    it('should not render the chevron when passing `drillable` hovering', async () => {
      const { driver } = render(
        <SidebarSectionItem disabled drillable>
          {sampleText}
        </SidebarSectionItem>
      );

      await driver.hover();

      expect(await driver.hasChevron()).toBe(false);
    });

    it('should render disabled button', async () => {
      const {driver} = render(
        <SidebarSectionItem disabled={true}>
          {sampleText}
        </SidebarSectionItem>
      );

      expect(await driver.isDisabled()).toBe(true);
    });
  });

  it('should render the prefix', async () => {
    const { driver } = render(
      <SidebarSectionItem prefix={<Badge />}>{sampleText}</SidebarSectionItem>,
    );

    expect(await driver.hasPrefix()).toBe(true);
  });

  describe('Suffix', () => {
    it('should render the suffix', async () => {
      const { driver } = render(
        <SidebarSectionItem suffix={<Badge />}>
          {sampleText}
        </SidebarSectionItem>,
      );

      expect(await driver.hasSuffix()).toBe(true);
    });

    it('should not render the chevron when hovering', async () => {
      const { driver } = render(
        <SidebarSectionItem suffix={<Badge />}>
          {sampleText}
        </SidebarSectionItem>,
      );

      await driver.hover();

      expect(await driver.hasChevron()).toBe(false);
    });
  });
});
