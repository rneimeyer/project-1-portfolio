# Project-1

# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
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
| Hamburger | H | 2hr | 3hr |
| Regular Nav + Linking | H | 2hr | 3hr |  
| About Me Section | H | 2hr | 2hr |
| Project Section | H | 3hr | 2hr |
| Contact Me Section | H | 2hr | 2hr |
| Form functionality | H | 3hr|  4hr | 
| Responsive Layout | H | 3hr | 4hr |
| Social Media Icons | M | 1hr |  1hr |
| Total |  | 18hrs| 21hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project animation | L | 3hr | hr |
| Banner animation | L | 1hr | hr |
| Make own icon | L | 2hr | 2hr |
| Carousel | L | 4hr | 5hr |
| Form Storage | L | 4hr | hr |
| Total |  | 14hrs| 7hrs |

## Additional Libraries

[Bootstrap](https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js)

[Font Awesome](https://kit.fontawesome.com/61852eca18.js)

[Google Fonts](https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap)

[Color Palette](https://www.colorsandfonts.com/color-palettes)

## Code Snippet

```js
    $('.hamburger').click(function(event) {
        event.preventDefault();
        $('.links').slideToggle()
    })
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