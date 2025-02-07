export const stories = [
  {
    user_id: 1,
    user_image:'https://goldfish.fra1.digitaloceanspaces.com/story2/promo.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 1,
        story_image: require('@/assets/stories/promo-store.mp4'),
        swipeText: null,
      }
    ],
  },
  {
    user_id: 2,
    user_image: 'https://goldfish.fra1.digitaloceanspaces.com/story2/einstein.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 7,
        story_image: require('@/assets/stories/einstein.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
        link: {
          url: 'https://wydawnictwo-tekturka.pl/',
          text: 'link do strony',
          top: '85%',
          right: '20%',
          color: '#000',
          size: 15,
          backgroundColor: '#fff'
        },
      }
    ],
  },
  {
    user_id: 3,
    user_image: 'https://goldfish.fra1.digitaloceanspaces.com/story2/tumilu.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 7,
        story_image: require('@/assets/stories/tumilu-store.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
        link: {
          url: 'https://tumilu.pl/',
          text: 'link do strony',
          top: '22%',
          right: '20%',
          color: '#000',
          size: 15,
          backgroundColor: '#fff'
        },
      }
    ],
  },
  {
    user_id: 4,
    user_image: 'https://goldfish.fra1.digitaloceanspaces.com/story2/sam.png',
    user_name: '',
    duration: 6,
    stories: [
      {
        story_id: 10,
        story_image: require('@/assets/stories/sam-store-1.mp4'),
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
        link: {
          url: 'https://wydawnictwosam.pl/',
          text: 'link do strony',
          top: '83%',
          right: '30%',
          color: '#000',
          size: 15,
          backgroundColor: '#fff'
        },
      }
    ],
  }
];
