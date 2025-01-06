export const stories = [
  {
    user_id: 1,
    user_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/2_1.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 1,
        story_image: require('@/assets/stories/story_3_1.mp4'),
        swipeText: null,
        link: {
          url: 'https://rodzinnygrajdolek.pl/',
          text: 'Rodzinny Grajdołek',
          top: '90%',
          right: '20%',
          color: '#000',
          size: 23,
          backgroundColor: '#fff'
        },
      },
      {
        story_id: 2,
        story_image: require('@/assets/stories/story_3_2.mp4'),
        swipeText: 'video 1',
        link: {
          url: 'https://rodzinnygrajdolek.pl/',
          text: 'Rodzinny Grajdołek',
          top: '90%',
          right: '20%',
          color: '#000',
          size: 23,
          backgroundColor: '#fff'
        },
      }
    ],
  },
  {
    user_id: 2,
    user_image: 'https://goldfish.fra1.digitaloceanspaces.com/story2/3_1.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 7,
        story_image: require('@/assets/stories/story_2_1.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
        link: {
          url: 'https://rodzinnygrajdolek.pl/',
        },
      }
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    duration: 6,
    stories: [
      {
        story_id: 10,
        story_image: require('@/assets/stories/story_3_1.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 11,
        story_image: require('@/assets/stories/story_3_2.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      }
    ],
  },
  {
    user_id: 4,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    duration: 6,
    stories: [
      {
        story_id: 10,
        story_image: require('@/assets/stories/story_3_1.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 11,
        story_image: require('@/assets/stories/story_3_2.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      }
    ],
  },
];
