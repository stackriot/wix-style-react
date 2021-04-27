export default {
  description:
    'AvatarGroup allows to display a number of avatars (digital representation of a user) as a single entity. It’s a building block grouping number of standalone <Avatar/> components.',
  do: [
    'To display a group of 2+ users',
    'To display users that have something in common (i.e. belong to a project, are in the same team, attend the same event, etc.)',
  ],
  dont: [
    'To display single avatar',
    'To display visual content other than users (i.e. images - use <Image/>)',
  ],
  featureExamples: [
    {
      title: 'Size',
      description:
        'Controls size of a component. It supports 2 sizes:' +
        ' - medium (default)- use in all common cases\n' +
        ' - small -  use to de-emphasise the group, also in more dense and narrow layouts',
      example: '_size',
    },
    {
      title: 'Group type',
      description:
        'Changes density of a group. Component supports 2 types: \n' +
        ' - stretched (default)- use when each user is as important as a group as a whole \n' +
        ' - condensed - use in narrow layouts and in cases where it is important to show the sum of the people rather than individuals',
      example: '_groupType',
    },
    {
      title: 'Divider',
      description:
        'Separates first avatar from the rest of the group to highlight the difference of a status or role (i.e. admin, team lead, etc). \n' +
        '\n' +
        'Component allows to separate single avatar only, which must be a first item on the list.\n',
      example: '_divider',
    },
    {
      title: 'Max number of items',
      description:
        'Defines the maximum number of  items to show before collapsing them. \n' +
        '\n' +
        'By default component displays up to 5 items. The ‘N+’ indication will replace the last avatar, in case the number exceeds this limit.\n',
      example: '_maxItems',
    },
  ],
};
