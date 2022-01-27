# Project-1

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

In this project, I will create a portfolio to show who I am as a developer. My page will contain an About Me, Projects/Skills, and Contact Section. I will utilize HTML, CSS, Javascript, and jQuery in the page. I will have a responsive layout, starting with mobile-first, that adjusts based on screen size.

## Wireframes

- [Mobile](https://drive.google.com/file/d/1onXIK258kA6PddARBhz1dSXzcaqM0ouS/view?usp=sharing)
- [Tablet](https://drive.google.com/file/d/168OIUPTzLvMQu7cksWS_YmzZiIgUqplp/view?usp=sharing)
- [Desktop](https://drive.google.com/file/d/1q2IM1BEDSA5yZwAVS6PYDI-5hOfxqrbm/view?usp=sharing)


## Time/Priority Matrix 

[Time/Priority Matrix Link](https://drive.google.com/file/d/1lmzU7bZIChTXGp_snLL7wBxuWrsLrONB/view?usp=sharing)


### MVP/PostMVP

#### MVP

- Navigation bar with hamburger for mobile version
- About Me section
- Projects section
- Skills section with icons
- Contact Me section with form for contact information
- Consistent style throughout

#### PostMVP 

- Animations on projects
- Animations in welcome/header section
- Carousel for projects and skills
- Specific icon for site
- Storing form data


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 2hr | hr |
| Regular Nav + Linking | H | 2hr | hr |  
| About Me Section | H | 2hr | hr |
| Project Section | H | 3hr | hr |
| Contact Me Section | H | 2hr | hr |
| Form functionality | H | 3hr|  hr | 
| Responsive Layout | H | 3hr | hr | hr |
| Social Media Icons | M | 1hr |  hr |
| Total |  | 18hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project animation | L | 3hr | -hr | hr |
| Banner animation | L | 1hr | hr |
| Make own icon | L | 2hr | hr |
| Carousel | L | 4hr | hr |
| Form Storage | L | 4hr | hr |
| Total |  | 10hrs| hrs |

## Additional Libraries


## Code Snippet

```

```

## Issues and Resolutions

My hamburger slide wasn't working originally, but I realized that I needed to prevent the default and wrap my code in a function to have jQuery wait to read the full HTML before actioning.

It took me a while to center the content in my carousel. I originally was using CSS to make the updates, but through reading the bootstrap documentation, there were classes I could add to my images to help center align them on the page and update the width so they didn't take up the full page.

```class="rounded mx-auto d-block w-50"```

However, once I fixed that alignment, the next images were bounching down and up as I tried to click to the next one. After trying a lot of different solutions, I realized I still had ```position: relative;``` listed for the carousel-inner and carousel-item. Once I removed that, the carousel started going through smoothly again. The code I removed is commented out below.

```css
.projectPic {
  /* height: 200px; */
  /* position: relative; */
}
.carousel-item {
  /* width: 50%; */
  /* position: relative;
  margin: 0 auto; */
}
.carousel-inner {
  /* align-items: center;
  justify-content: center;
  align-content: center; */
}
```