# QuizX

**Architectural Decision Records**
1. **CSS Framework**
•	Decision: We will use Tailwind CSS as our CSS framework.

•	Status: Accepted

•	Context: Tailwind CSS is a utility-first CSS framework that provides extensive customization and granular style capabilities. It facilitates swift development and guarantees a uniform design scheme throughout the application. By utilizing Tailwind's utility classes, developers may exert meticulous control over the design elements without the need to create bespoke CSS, resulting in a reduction in development time. Our team members possess previous expertise with Tailwind CSS, which will enable streamlined and impactful styling.

•	Negative: Team members who aren't used to Tailwind's utility-first method might need to make some initial adjustments. There might be an initial learning curve for understanding and effectively using utility-first classes.

•	Positive: The app's style will be consistent and responsive, and it will be easier to change than with traditional frameworks like Bootstrap. Tailwind CSS allows for greater flexibility and customization, enabling developers to create unique designs efficiently.

•	Rationale: Tailwind CSS efficiently fulfills our need for a flexible and customizable design system. Its utility-first approach and the team's prior experience make it an ideal choice for our project.


3. **Development Framework**
•	Decision: We will use React Native for the development of our mobile app.

•	Status: Accepted

•	Context: React Native allows the development of native apps using JavaScript and React. It offers near-native performance on both Android and iOS while requiring only a single codebase, saving time and resources. Our team already has experience with React, making the transition to React Native more manageable.

•	Negative: There may be some limitations compared to fully native development, particularly with features that are unique to specific devices. Skilled developers and maintainers are needed, and it's challenging to work with an app that runs on multiple platforms and systems.

•	Positive: React Native enables quick development and efficient performance. The ability to use a single codebase for both platforms makes it easier to maintain and add new features. Cross-platform push notifications and a large audience reach are added benefits
.
•	Rationale: React Native efficiently fulfills our need for cross-platform compatibility, reducing development time and costs while leveraging our existing expertise with React.


3.** Navigation Strategy**
•	Decision: We will use React Navigation for our navigation strategy.

•	Status: Accepted

•	Context: React Navigation is a widely-used library for routing and navigation in React Native apps. It is customizable and easy to integrate with React Native, supporting various types of navigation such as stack, tab, and drawer navigation, which are essential for our app's structure.

•	Negative: Team members who aren't familiar with React Navigation might have to go through a small learning curve. However, the extensive documentation and community support can mitigate this challenge.

•	Positive: The app will be easy to use and navigate, enhancing the user experience. React Navigation's flexibility and support for various navigation types make it a suitable choice for our app.

•	Rationale: React Navigation provides the necessary tools for creating a seamless and intuitive navigation experience, aligning with our project goals and enhancing overall usability.


4. **Database Storage**
•	Decision: We will use a combination of local encrypted storage and a remote database.

•	Status: Accepted

•	Context: Local encrypted storage will securely store sensitive information such as user progress and preferences. A remote database will handle quiz questions, user data, and leaderboard data, facilitating updates and scalability.

•	Negative: This mixed approach may complicate data management and require careful synchronization between local and remote data. Ensuring data consistency and security across both storage types may require additional effort.

•	Positive: This approach balances security, performance, and scalability. Local storage ensures quick access to frequently used data, while the remote database supports comprehensive data management and scalability.

•	Rationale: A combination of local encrypted storage and a remote database effectively addresses our needs for secure, performant, and scalable data management, aligning with our project goals.
