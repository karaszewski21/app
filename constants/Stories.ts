export const stories = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 1,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',
        swipeText: null,
        link: {
          url: 'https://wydawnictwo-tekturka.pl/',
          text: 'wydawnictwo-tekturka',
          top: '50%',
          right: '10%',
          color: '#007AFF',
          size: 23,
          backgroundColor: '#000'
        },
      },
      {
        story_id: 2,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
        swipeText: 'video 1',
        link: {
          url: 'https://www.wp.pl/',
          text: 'wp',
          top: '80%',
          right: '30%',
          color: '#007AFF',
          size: 23,
          backgroundColor: 'transparent'
        },
      },
      {
        story_id: 3,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/video5.mp4',
        swipeText: 'video 3',
      },
      {
        story_id: 4,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/story2/video4.mp4',
        swipeText: 'video 4',
      },
      {
        story_id: 5,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',
        swipeText: 'video dsdf',
      },
      {
        story_id: 6,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
        swipeText: 'video 1dfdfdfd6',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Test User',
    duration: 6,
    stories: [
      {
        story_id: 5,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/stories/promo.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 6,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/video5.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 7,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 3 swiped'),
      },
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
        story_id: 1,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/video5.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 3 swiped'),
      },
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
        story_id: 1,
        story_image: 'https://goldfish.fra1.digitaloceanspaces.com/videos/09ed1e5e-24c9-4b3e-84b5-c6775f86837f.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/video5.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
      {
        story_id: 3,
        story_image:'https://goldfish.fra1.digitaloceanspaces.com/videos/6c588ee0-8c8c-408c-94e0-f8f2e3b5db86.mp4',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 3 swiped'),
      },
    ],
  },
];
