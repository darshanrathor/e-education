import Link from "next/link";
import { useRouter } from "next/router";
import { Header, Paragraph } from "../components/commonComponent/commonSIze";
import SizeComponent from "../components/commonComponent/sizeComponent";
import Router from "next/router";

export default function Home() {
  const review = [
    {
      user: "/imgs/dad.jpg",
      name: "Ravindra R Shah",
      desc: '" "I would say it’s a very reasonable cost to tap into a worldwide network of students who, as a group, have gone through just about everything you can imagine and have a world of experience they can offer to you.”',
      img: `<svg viewBox="0 0 2761 991" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1447.629 301.83c0 28.119-22.658 50.76-50.777 50.76-28.118 0-50.76-22.641-50.76-50.76s21.87-50.76 50.76-50.76c28.915.78 50.777 23.43 50.777 50.76zm-209.316 102.317v12.5s-24.202-31.256-75.75-31.256c-85.121 0-151.517 64.828-151.517 154.638 0 89.037 65.615 154.638 151.517 154.638 52.328 0 75.75-32.02 75.75-32.02v13.271c0 6.25 4.697 10.923 10.939 10.923h63.252V393.177h-63.252c-6.242.024-10.939 5.5-10.939 10.97zm0 188.21c-11.703 17.189-35.14 32.028-63.251 32.028-49.98 0-88.258-31.24-88.258-84.356 0-53.11 38.277-84.349 88.258-84.349 27.338 0 52.328 15.62 63.251 32.02v104.658zm121.058-199.156h74.97v293.664h-74.97V393.2zm1119.954-7.818c-51.548 0-75.766 31.255-75.766 31.255V251.85h-74.97v435.015h63.267c6.25 0 10.923-5.47 10.923-10.94v-13.27s24.218 32.02 75.75 32.02c85.137 0 151.518-65.585 151.518-154.623s-66.38-154.669-150.722-154.669zm-12.499 238.214c-28.906 0-51.548-14.824-63.267-32.02V486.92c11.719-15.62 36.709-32.02 63.267-32.02 49.98 0 88.25 31.24 88.25 84.349 0 53.109-38.261 84.348-88.25 84.348zm-177.28-110.891v174.939h-74.985V521.288c0-48.412-15.62-67.949-57.767-67.949-22.642 0-46.08 11.72-60.942 28.907v204.626h-74.955V393.21h59.335c6.25 0 10.938 5.469 10.938 10.938v12.5c21.87-22.658 50.76-31.256 79.652-31.256 32.808 0 60.147 9.386 82.016 28.126 26.543 21.87 36.709 49.98 36.709 99.189zm-450.65-127.323c-51.532 0-75.75 31.255-75.75 31.255V251.85h-74.97v435.015h63.251c6.25 0 10.939-5.47 10.939-10.94v-13.27s24.218 32.02 75.75 32.02c85.137 0 151.518-65.585 151.518-154.623.78-89.045-65.6-154.669-150.737-154.669zm-12.498 238.214c-28.891 0-51.533-14.824-63.252-32.02V486.92c11.719-15.62 36.709-32.02 63.252-32.02 49.996 0 88.257 31.24 88.257 84.349 0 53.109-38.261 84.348-88.257 84.348zm-203.05-238.214c22.641 0 34.36 3.917 34.36 3.917v69.5s-62.48-21.088-101.52 23.438v205.399H1481.2V393.2h63.267c6.25 0 10.923 5.469 10.923 10.938v12.5c14.075-16.409 44.535-31.256 67.957-31.256zM844.705 660.306c-3.901-9.37-7.81-19.52-11.711-28.119-6.258-14.051-12.507-27.338-17.96-39.83l-.781-.78c-53.897-117.156-111.68-235.858-172.606-352.999l-2.34-4.696a1536.65 1536.65 0 01-18.734-36.71c-7.817-14.067-15.62-28.89-28.119-42.958-24.99-31.24-60.918-48.427-99.18-48.427-39.057 0-74.198 17.188-99.96 46.859-11.72 14.052-20.317 28.891-28.12 42.958a1695.173 1695.173 0 01-18.732 36.71l-2.349 4.696c-60.138 117.141-118.709 235.85-172.598 353l-.788 1.552c-5.462 12.514-11.719 25.786-17.968 39.83-3.901 8.597-7.803 17.968-11.704 28.118-10.158 28.892-13.287 56.23-9.37 84.357 8.59 58.578 47.632 107.763 101.529 129.647 20.309 8.598 41.398 12.5 63.26 12.5 6.249 0 14.051-.78 20.308-1.569 25.779-3.12 52.33-11.703 78.107-26.543 32.02-17.968 62.48-43.73 96.84-81.22 34.36 37.49 65.6 63.252 96.84 81.22 25.786 14.84 52.329 23.422 78.1 26.543 6.249.796 14.066 1.568 20.316 1.568 21.87 0 43.73-3.9 63.252-12.499 54.677-21.884 92.938-71.85 101.536-129.647 6.203-27.331 3.082-54.654-7.068-83.56zm-352.219 40.61c-42.178-53.109-69.517-103.09-78.88-145.252-3.9-17.968-4.688-33.588-2.34-47.647 1.553-12.5 6.25-23.438 12.499-32.808 14.84-21.074 39.83-34.36 68.729-34.36 28.907 0 54.677 12.498 68.736 34.36 6.25 9.37 10.931 20.316 12.507 32.808 2.333 14.067 1.553 30.46-2.348 47.647-9.402 41.383-36.74 91.37-78.903 145.252zm311.6 36.71c-5.46 40.61-32.8 75.765-71.06 91.385-18.742 7.802-39.058 10.15-59.352 7.802-19.52-2.348-39.057-8.598-59.35-20.3-28.119-15.636-56.23-39.83-89.038-75.767 51.54-63.252 82.78-121.058 94.5-172.59 5.469-24.218 6.257-46.08 3.9-66.397-3.113-19.52-10.15-37.489-21.081-53.109-24.226-35.156-64.843-55.45-110.127-55.45-45.283 0-85.901 21.09-110.111 55.45-10.93 15.62-17.968 33.588-21.09 53.11-3.12 20.316-2.348 42.958 3.902 66.395 11.71 51.533 43.73 110.112 94.491 173.371-32.02 35.929-60.919 60.147-89.037 75.766-20.31 11.72-39.822 17.969-59.343 20.302a124.96 124.96 0 01-59.359-7.803c-38.261-15.62-65.6-50.776-71.061-91.386-2.341-19.52-.788-39.042 7.03-60.91 2.332-7.819 6.249-15.62 10.15-24.991 5.47-12.499 11.703-25.786 17.96-39.057l.788-1.553c53.882-116.376 111.672-235.085 171.81-350.666l2.341-4.697c6.258-11.703 12.507-24.202 18.749-35.92 6.25-12.5 13.271-24.219 21.87-34.377 16.4-18.725 38.26-28.891 62.478-28.891 24.218 0 46.08 10.166 62.48 28.891 8.598 10.182 15.62 21.9 21.87 34.376 6.256 11.719 12.506 24.218 18.74 35.921l2.348 4.697a10341.109 10341.109 0 01171.038 351.446v.78c6.257 12.515 11.719 26.559 17.968 39.073 3.901 9.355 7.81 17.157 10.15 24.975 6.235 20.285 8.575 39.822 5.447 60.123z" fill="currentColor" fill-rule="nonzero"/>
                    </svg>`,
    },
    {
      user: "/imgs/jiju.jpg",
      name: " Sushant Kumar",
      desc: "“The discussions we have are why we do what we do, and how to make decisions that align with core values. And all the ups and downs of starting something new. It is energizing and inspiring, and practical and useful..”",
      img: `<svg viewBox="0 0 2761 991" xmlns="http://www.w3.org/2000/svg">
                        <path d="M705.019 399.95c27.127 0 53.153-22.584 57.68-50.446 5.35-27.119-13.037-49.703-40.144-49.703-27.115 0-53.145 22.584-57.74 49.703-5.29 27.862 12.342 50.446 40.204 50.446zm1840.855 80.607h60.682c8.316 0 13.186-3.377 15.059-11.137a2716.172 2716.172 0 018.961-35.996c1.796-6.984-2.271-12.278-10.015-12.278h-59.879c4.314-17.161 21.107-72.876 21.107-109.2 0-72.54-61.598-134.244-149-134.244-98.708 0-162.925 66.243-162.925 159.455 0 27.188 10.144 58.879 22.717 78.537-5.411-.309-10.83-.462-16.25-.46-75.002 0-122.244 40.685-122.244 99.887 0 55.562 43.8 77.153 85.038 91.522 36.63 12.766 70.362 18.706 70.362 47.322 0 19.295-18.56 30.618-54.884 30.618-43.098 0-66.783-20.296-72.803-27.995 4.083-3.208 10.156-10.846 10.156-23.573 0-17.802-12.505-32.332-35.73-32.332-19.65 0-36.263 16.027-40.435 37.11-31.561 25.82-66.008 42.553-114.864 42.553-48.105 0-73.074-25.021-73.074-78.263 11.278 3.434 40.645 7.558 60.053 7.558 81.455 0 136.968-37.01 136.968-111.124 0-39.854-34.987-81.709-104.204-81.709h-.157c-91.038 0-142.032 57.668-164.297 121.098a1300.764 1300.764 0 00-18.747-4.374c4.98-14.07 8.554-30.375 8.554-48.452 0-31.328-19.4-68.272-71.314-68.272-36.162 0-70.463 23.685-94.237 59.185 5.915-23.157 9.837-38.578 10.091-39.611 1.55-6.057-.972-12.803-10.418-12.803h-53.282c-7.594 0-12.953 2.683-15.112 11.33-1.448 5.766-19.755 77.597-37.577 147.54-11.226 43.61-69.298 97.897-142.287 97.897-48.113 0-73.061-26.667-73.061-79.93 12.589 5.012 40.64 9.22 60.04 9.22 84.768 0 136.968-37.008 136.968-111.123 0-39.854-34.983-81.709-104.207-81.709h-.15c-102.513 0-165.31 79.623-175.95 169.902-4.426 37.53-36.101 89.064-70.439 89.064-16.729 0-26.058-10.507-26.058-28.346 0-15.405 10.846-53.076 22.733-100.286 3.983-15.793 10.027-39.886 16.73-66.581h55.73c8.297 0 13.163-3.377 15.047-11.137 2.668-11.173 7.562-30.666 8.95-35.996 1.796-6.984-2.247-12.278-10.015-12.278h-54.803s25.23-100.674 25.832-103.26c2.429-10.237-6.137-16.144-15.1-14.26 0 0-42.359 8.292-50.215 9.93-7.896 1.598-14.025 5.936-16.878 17.319l-22.435 90.27h-44.005c-8.296 0-13.175 3.386-15.035 11.13a3732.041 3732.041 0 01-8.95 36.003c-1.82 6.985 2.244 12.279 10.003 12.279h43.155c-.307 1.235-15.587 59.363-27.947 111.418-5.818 25.033-25.303 83.61-57.212 83.61-19.061 0-27.115-9.616-27.115-30.239 0-32.477 31.97-113.779 31.97-150.67 0-49.28-26.438-77.832-80.6-77.832-34.14 0-69.54 22.044-84.541 41.391 0 0 4.551-15.837 6.109-21.926 1.662-6.432-1.788-12.75-10.233-12.75H837.25c-11.27 0-14.385 6.024-16.04 12.65-.661 2.658-19.743 77.588-38.062 149.52-12.528 49.255-42.972 90.412-75.523 90.412-16.737 0-24.19-10.503-24.19-28.341 0-15.414 9.959-53.448 21.842-100.653 14.457-57.471 27.212-104.797 28.576-110.325 1.78-7.086-1.388-13.26-10.52-13.26H670.06c-9.652 0-13.098 5.065-15.132 12.102 0 0-14.994 56.76-30.871 119.948-11.532 45.858-24.267 92.567-24.267 114.513 0 39.164 17.585 68.684 65.928 68.684 37.312 0 66.84-18.92 89.387-43.03-3.312 13.05-5.427 21.31-5.64 22.153-1.946 7.46.41 14.054 9.2 14.054h54.516c9.49 0 13.138-3.817 15.12-12.093 1.908-7.897 42.625-168.05 42.625-168.05 10.761-43.02 37.38-71.508 74.829-71.508 17.758 0 33.127 11.758 31.348 34.608-1.977 25.138-32.292 115.446-32.292 155.081 0 30 11.124 68.813 67.598 68.813 38.494 0 66.832-18.456 87.438-42.275 7.546 25.28 27.535 42.275 64.201 42.275 60.937 0 97.667-36.141 119.247-72.444 17.907 42.178 59.847 72.424 121.348 72.424 62.684 0 111.193-26.425 145.57-62.349l-10.72 42.053c-1.95 7.574 1.347 13.53 10.24 13.53h53.957c7.388 0 12.645-3.757 14.562-11.517.948-3.809 8.744-33.938 19.755-76.75 21.059-81.922 54.904-166.915 105.762-166.915 17.935 0 25.29 10.027 25.29 25.824 0 7.449-2.162 13.884-4.03 17.334-24.65-4.898-44.482 7.271-44.482 33.592 0 17.148 18.045 32.736 42.4 32.736 18.61 0 33.995-4.564 46.265-12.824a1729.855 1729.855 0 0136.15 7.86 237.795 237.795 0 00-2.829 35.904c0 65.754 46.951 121.518 131.11 121.518 65.947 0 111.204-24.125 150.27-55.054 18.78 30.727 66.195 55.558 128.402 55.558 85.26 0 133.615-44.332 133.615-102.932 0-53.04-43.541-72.562-88.443-88.815-36.5-13.186-66.944-20.356-66.944-46.152 0-21.144 16.644-30.815 45.171-30.815 18.509 0 32.405 3.986 39.826 6.068 7.36 18.42 22.588 38.817 48.585 38.817 21.999 0 31.877-17.399 31.877-33.422 0-45.612-75.98-50.393-75.98-148.214 0-60.827 34.42-111.006 105.702-111.006 49.53 0 81.874 31.408 81.874 82.1 0 41.794-25.348 116.196-25.348 116.196h-43.086c-8.28 0-13.166 3.385-15.038 11.128a3072.974 3072.974 0 01-8.966 36.004c-1.812 6.985 2.251 12.279 10.015 12.279h42.069s-43.49 160.391-43.49 189.56c0 39.164 22.072 68.676 70.435 68.676 68.406 0 111.152-44.454 129.738-109.095 1.444-4.999-1.388-9.07-6.452-9.07h-26.099c-5.209 0-8.231 2.97-9.546 8.062-5.896 22.947-20.506 47.088-49.276 47.088-16.729 0-26.054-10.507-26.054-28.342 0-15.41 10.2-51.486 22.75-100.285 5.98-23.238 16.624-66.59 16.624-66.59zm-539.375-2.74c24.19 0 35.682 16.092 35.682 35.27 0 32.437-25.158 52.217-64.508 52.217-14.082 0-33.769-3.337-45.393-7.21 4.886-29.831 26.477-80.277 74.22-80.277zm-569.035 0c26.477 0 35.67 16.092 35.67 35.27 0 32.437-25.147 52.217-64.492 52.217-14.086 0-33.773-3.337-45.394-7.21 4.858-29.831 24.004-80.277 74.216-80.277zM390.64 177C218.03 177 131 300.753 131 403.952c0 62.486 23.657 118.077 74.397 138.788 8.32 3.406 15.773.117 18.186-9.095 1.679-6.375 5.649-22.454 7.42-29.156 2.438-9.112 1.49-12.307-5.225-20.248-14.63-17.258-23.98-39.6-23.98-71.246 0-91.812 68.692-174.005 178.872-174.005 97.566 0 151.163 59.613 151.163 139.227 0 104.753-46.354 193.164-115.18 193.164-38.005 0-66.456-31.433-57.337-69.983 10.919-46.023 32.07-95.694 32.07-128.914 0-29.738-15.962-54.542-48.996-54.542-38.853 0-70.064 40.193-70.064 94.036 0 34.294 11.588 57.487 11.588 57.487s-39.76 168.465-46.729 197.969c-13.88 58.757-2.09 130.786-1.093 138.061.589 4.31 6.129 5.335 8.638 2.082 3.584-4.676 49.853-61.804 65.59-118.89 4.45-16.165 25.553-99.859 25.553-99.859 12.621 24.077 49.513 45.285 88.746 45.285 116.785 0 196.024-106.472 196.024-248.988C620.643 277.363 529.367 177 390.64 177z" fill="currentColor" fill-rule="nonzero"/>
                    </svg>`,
    },
    {
      user: "/imgs/rs.jpg",
      name: "Rahul Shah",
      desc: '" You’ll learn more from the threads seen here everyday than you did in most courses you’ve ever waded through. So dive in, everyone is here because this is exactly what we want to be doing”',
      img: `<svg viewBox="0 0 2761 991" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1447.629 301.83c0 28.119-22.658 50.76-50.777 50.76-28.118 0-50.76-22.641-50.76-50.76s21.87-50.76 50.76-50.76c28.915.78 50.777 23.43 50.777 50.76zm-209.316 102.317v12.5s-24.202-31.256-75.75-31.256c-85.121 0-151.517 64.828-151.517 154.638 0 89.037 65.615 154.638 151.517 154.638 52.328 0 75.75-32.02 75.75-32.02v13.271c0 6.25 4.697 10.923 10.939 10.923h63.252V393.177h-63.252c-6.242.024-10.939 5.5-10.939 10.97zm0 188.21c-11.703 17.189-35.14 32.028-63.251 32.028-49.98 0-88.258-31.24-88.258-84.356 0-53.11 38.277-84.349 88.258-84.349 27.338 0 52.328 15.62 63.251 32.02v104.658zm121.058-199.156h74.97v293.664h-74.97V393.2zm1119.954-7.818c-51.548 0-75.766 31.255-75.766 31.255V251.85h-74.97v435.015h63.267c6.25 0 10.923-5.47 10.923-10.94v-13.27s24.218 32.02 75.75 32.02c85.137 0 151.518-65.585 151.518-154.623s-66.38-154.669-150.722-154.669zm-12.499 238.214c-28.906 0-51.548-14.824-63.267-32.02V486.92c11.719-15.62 36.709-32.02 63.267-32.02 49.98 0 88.25 31.24 88.25 84.349 0 53.109-38.261 84.348-88.25 84.348zm-177.28-110.891v174.939h-74.985V521.288c0-48.412-15.62-67.949-57.767-67.949-22.642 0-46.08 11.72-60.942 28.907v204.626h-74.955V393.21h59.335c6.25 0 10.938 5.469 10.938 10.938v12.5c21.87-22.658 50.76-31.256 79.652-31.256 32.808 0 60.147 9.386 82.016 28.126 26.543 21.87 36.709 49.98 36.709 99.189zm-450.65-127.323c-51.532 0-75.75 31.255-75.75 31.255V251.85h-74.97v435.015h63.251c6.25 0 10.939-5.47 10.939-10.94v-13.27s24.218 32.02 75.75 32.02c85.137 0 151.518-65.585 151.518-154.623.78-89.045-65.6-154.669-150.737-154.669zm-12.498 238.214c-28.891 0-51.533-14.824-63.252-32.02V486.92c11.719-15.62 36.709-32.02 63.252-32.02 49.996 0 88.257 31.24 88.257 84.349 0 53.109-38.261 84.348-88.257 84.348zm-203.05-238.214c22.641 0 34.36 3.917 34.36 3.917v69.5s-62.48-21.088-101.52 23.438v205.399H1481.2V393.2h63.267c6.25 0 10.923 5.469 10.923 10.938v12.5c14.075-16.409 44.535-31.256 67.957-31.256zM844.705 660.306c-3.901-9.37-7.81-19.52-11.711-28.119-6.258-14.051-12.507-27.338-17.96-39.83l-.781-.78c-53.897-117.156-111.68-235.858-172.606-352.999l-2.34-4.696a1536.65 1536.65 0 01-18.734-36.71c-7.817-14.067-15.62-28.89-28.119-42.958-24.99-31.24-60.918-48.427-99.18-48.427-39.057 0-74.198 17.188-99.96 46.859-11.72 14.052-20.317 28.891-28.12 42.958a1695.173 1695.173 0 01-18.732 36.71l-2.349 4.696c-60.138 117.141-118.709 235.85-172.598 353l-.788 1.552c-5.462 12.514-11.719 25.786-17.968 39.83-3.901 8.597-7.803 17.968-11.704 28.118-10.158 28.892-13.287 56.23-9.37 84.357 8.59 58.578 47.632 107.763 101.529 129.647 20.309 8.598 41.398 12.5 63.26 12.5 6.249 0 14.051-.78 20.308-1.569 25.779-3.12 52.33-11.703 78.107-26.543 32.02-17.968 62.48-43.73 96.84-81.22 34.36 37.49 65.6 63.252 96.84 81.22 25.786 14.84 52.329 23.422 78.1 26.543 6.249.796 14.066 1.568 20.316 1.568 21.87 0 43.73-3.9 63.252-12.499 54.677-21.884 92.938-71.85 101.536-129.647 6.203-27.331 3.082-54.654-7.068-83.56zm-352.219 40.61c-42.178-53.109-69.517-103.09-78.88-145.252-3.9-17.968-4.688-33.588-2.34-47.647 1.553-12.5 6.25-23.438 12.499-32.808 14.84-21.074 39.83-34.36 68.729-34.36 28.907 0 54.677 12.498 68.736 34.36 6.25 9.37 10.931 20.316 12.507 32.808 2.333 14.067 1.553 30.46-2.348 47.647-9.402 41.383-36.74 91.37-78.903 145.252zm311.6 36.71c-5.46 40.61-32.8 75.765-71.06 91.385-18.742 7.802-39.058 10.15-59.352 7.802-19.52-2.348-39.057-8.598-59.35-20.3-28.119-15.636-56.23-39.83-89.038-75.767 51.54-63.252 82.78-121.058 94.5-172.59 5.469-24.218 6.257-46.08 3.9-66.397-3.113-19.52-10.15-37.489-21.081-53.109-24.226-35.156-64.843-55.45-110.127-55.45-45.283 0-85.901 21.09-110.111 55.45-10.93 15.62-17.968 33.588-21.09 53.11-3.12 20.316-2.348 42.958 3.902 66.395 11.71 51.533 43.73 110.112 94.491 173.371-32.02 35.929-60.919 60.147-89.037 75.766-20.31 11.72-39.822 17.969-59.343 20.302a124.96 124.96 0 01-59.359-7.803c-38.261-15.62-65.6-50.776-71.061-91.386-2.341-19.52-.788-39.042 7.03-60.91 2.332-7.819 6.249-15.62 10.15-24.991 5.47-12.499 11.703-25.786 17.96-39.057l.788-1.553c53.882-116.376 111.672-235.085 171.81-350.666l2.341-4.697c6.258-11.703 12.507-24.202 18.749-35.92 6.25-12.5 13.271-24.219 21.87-34.377 16.4-18.725 38.26-28.891 62.478-28.891 24.218 0 46.08 10.166 62.48 28.891 8.598 10.182 15.62 21.9 21.87 34.376 6.256 11.719 12.506 24.218 18.74 35.921l2.348 4.697a10341.109 10341.109 0 01171.038 351.446v.78c6.257 12.515 11.719 26.559 17.968 39.073 3.901 9.355 7.81 17.157 10.15 24.975 6.235 20.285 8.575 39.822 5.447 60.123z" fill="currentColor" fill-rule="nonzero"/>
                    </svg>`,
    },
  ];

  const router = useRouter();
  return (
    <>
      <div className="relative overflow-hidden before:bg-[length:1400px_1000px] before:bg-no-repeat before:scale-[1.1] before:absolute before:z-[-1] before:bg-[url('/imgs/banner.png')] before:translate-x-[60%]  before:top-[0%]   before:bg-center pt-36 pb-0 md:pt-32 md:pb-32 before:w-full before:right-0 md:before:-translate-x-10  before:h-full  w-full">
        <div className="flex md:flex-row px-5 flex-col gap-16 md:gap-20 items-center max-w-7xl mx-auto">
          <div className="w-full flex flex-col gap-12">
            <h1 style={{ lineHeight: 1 }} className="md:text-6xl text-5xl">
              Build skills with courses flexible Advance courses
            </h1>
            <button
              onClick={() => Router.push("/courses")}
              className="bg-blue-700 px-5 py-3.5 rounded hover:bg-blue-600 text-white font-bold text-xl max-w-[250px]"
            >
              View courses
            </button>
          </div>
          <div className="w-full">
            <img
              src="/imgs/Education-amico.svg"
              className="w-full"
              alt="education"
            />
          </div>
        </div>
      </div>
      <div className="md:py-36 py-20 max-w-7xl mx-auto px-5">
        <div className="border-2 flex flex-col gap-5 border-blue-600 md:bg-[url('/course/bg2.jpeg')] bg-cover bg-no-repeat w-full bg-right boorder-blue-500 rounded-2xl p-7 md:p-14 ">
          <Header extra="max-w-xl md:text-5xl text-3xl">
            We Provide The Best Teaching/Learning Support For All
          </Header>
          <button
            onClick={() => Router.push("/contact")}
            className="hover:bg-blue-700 bg-blue-600 max-w-max text-white rounded-full py-2 font-bold text-lg px-7 "
          >
            Enroll Today
          </button>
        </div>
      </div>
      <div
        style={{
          background: "url('/course/bg1.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="py-28 z-10 blocksection relative flex flex-col gap-12 px-5 "
      >
        <div className=" w-full flex-col flex gap-6 justify-center text-center max-w-4xl mx-auto">
          <Header className="text-center flex flex-col justify-center w-full">
            Welcome to Akash Institute Of Education
          </Header>
          <p className="md:text-lg  text-zinc-800">
            As well know I.T has become the heart and soul of every part of life
            new a day. In the light of this statement it has become compulsory
            for every type of education stream to have I.T in its plumage.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl gap-9 mx-auto">
          <div className="flex flex-col gap-5 bg-white p-8 rounded-xl">
            <div className="flex justify-center">
              <img
                src="/imgs/service.png"
                alt="practical"
                className="w-[70px]"
              />
            </div>
            <h3 className="text-xl text-center text-zinc-800 justify-center max-w-4xl mx-auto gap-6 ">
              Practical Approach
            </h3>
            <p className="text-zinc-700 text-base text-center">
              We deem only theoretical knowledge is not enough in the study,
              because of which we provide practical knowledge for all short &
              long term courses.
            </p>
          </div>
          <div className="flex flex-col gap-5 bg-white p-8 rounded-xl">
            <div className="flex justify-center">
              <img src="/imgs/book.png" alt="practical" className="w-[70px]" />
            </div>
            <h3 className="text-xl text-center text-zinc-800 justify-center max-w-4xl mx-auto gap-6 ">
              Study Material & Notes
            </h3>
            <p className="text-zinc-700 text-base text-center">
              Akash Institute of Education has prepared the complete section of
              notes which contains a set of exercises which students must read.
            </p>
          </div>
          <div className="flex flex-col sm:col-span-2 md:col-span-1 gap-5 bg-white p-8 rounded-xl">
            <div className="flex justify-center">
              <img
                src="/imgs/leader.png"
                alt="practical"
                className="w-[70px]"
              />
            </div>
            <h3 className="text-xl text-center  text-zinc-800 justify-center max-w-4xl mx-auto gap-6 ">
              Experienced Trainers
            </h3>
            <p className="text-zinc-700 text-base text-center">
              Our institute well-known Because of our expert and experienced
              trainers, they have lots of technical knowledge.
            </p>
          </div>
        </div>
      </div>
      <SizeComponent section="bg-white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-7 max-w-4xl  justify-center mx-auto text-center">
            <Header>Popular Courses We Offer</Header>
            <Paragraph>
              Akash Institute of Education offers a wide range of Computer
              courses. find the best and most popular course for you. Thousands
              of students have benefited from our computer courses.
            </Paragraph>
          </div>
          <div className="grid max-w-6xl mx-auto sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              link="/course/diploma-in-computer-application"
              level="Intermediate"
              duration="6-12 Months"
              title="Diploma in Computer Applications"
              desc="Diploma in Computer Application (DCA) is designed for SSC+ students"
              image="/course/DCA.png"
            />
            <Card
              link="/course/desktop-publishing-courses"
              level="Beginner"
              duration="Short"
              title="Desktop Publishing Courses"
              desc=" PGDCA extensively deals with the theoretical and practical aspects of Computer Softwares"
              image="/course/DTP.jpeg"
            />

            <Card
              link="/course/accounting"
              level="Intermediate"
              duration="1 Year"
              title="Accounting"
              desc="Akash Institute aims to develop student into a complete accountant, working on accounting related software on computers."
              image="/course/Accounting.jpeg"
            />
          </div>
          <Link href="/courses">
            <a className="bg-blue-600 mx-auto hover:blue-500 py-3 px-5 rounded-full max-w-max text-white font-bold">
              View All Course
            </a>
          </Link>
        </div>
      </SizeComponent>
      <div className="bg-blue-800 bg-[url('/imgs/bg.svg')] bg-cover bg-center py-20 md:py-32 px-5   w-full">
        <div className="max-w-7xl flex md:flex-row flex-col gap-20 md:gap-10 sm:gap-20 mx-auto ">
          <div className="flex flex-col gap-7 text-left w-full md:w-5/12">
            <Header extra="md:text-5xl text-3xl text-zinc-100">
              Grow your career today with the Education courses
            </Header>
            <Paragraph extra="text-zinc-300">
              Akash institute offers a variety of courses – technology courses
              for IT students, career programs for students wanting to enter the
              IT sector, certification courses for IT professionals to enhance
              their career and basic IT programs for school students,
              housewives/senior citizens etc.
            </Paragraph>
            <button
              onClick={() => router.push("/courses")}
              className="bg-zinc-100 mt-2 text-blue-800 rounded-[60px] shadow-xl p-4 text-xl font-semibold max-w-[230px]  justify-items-center hover:bg-zinc-300"
            >
              Explore Courses
            </button>
          </div>
          <div className="flex justify-center gap-5 w-full md:w-7/12	">
            <div className="grid grid-cols-2 grid-rows-2 gap-10 circle">
              <div className="flex font-bold bg-white  shadow-md rounded-[30px] text-zinc-700  flex-col py-8 px-7 w-full justify-center text-center gap-3 text-4xl  md:text-5xl">
                1187+
                <span className="text-2xl font-normal text-zinc-700">
                  Happy Students
                </span>
              </div>
              <div className="row-span-2  flex justify-center">
                <div className="flex font-bold w-full my-auto  bg-white  shadow-md rounded-[30px] text-zinc-700  flex-col py-12 px-7 justify-center text-center gap-3 text-4xl  md:text-5xl">
                  25+
                  <span className="text-2xl font-normal">Courses</span>
                </div>
              </div>

              <div className="flex font-bold bg-white  shadow-md rounded-[30px] text-zinc-700  flex-col py-10 px-7 justify-center text-center gap-3 text-4xl  md:text-5xl">
                15+
                <span className="text-2xl font-normal">Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" flex gap-20 py-28 flex-col max-w-7xl mx-auto px-5">
        <div className="flex flex-col gap-3">
          <span className="uppercase max-w-max mx-auto font-semibold mb-8 text-xs sm:text-sm text-blue-500 py-1 px-5 rounded-full bg-sky-50">
            Testenomial
          </span>
          <h1 className="text-center">What customers says about us.</h1>
          <p className="text-center md:text-xl text-lg text-zinc-500">
            Let us help answer the most common questions you might have.
          </p>
        </div>
        <div className=" flex overflow-x-auto w-full py-10">
          {review.map((item, i) => (
            <div
              key={i}
              className="flex relative w-full  min-w-[350px] cursor-default mr-10 flex-col hover:shadow-xl hover:shadow-blue-200/40 gap-6 py-12 px-10 border border-blue-200 bg-white rounded-xl"
            >
              <div className="flex gap-6 items-center">
                <img
                  src={item.user}
                  className="w-14 h-14 rounded-full"
                  alt="user"
                />
                <h5>{item.name}</h5>
              </div>
              <Paragraph extra="text-zinc-600 text-xl pb-5">
                {item.desc}
              </Paragraph>
              <div className="absolute bottom-4 right-5">
                <img src="/imgs/quote.svg" alt="quote" className="w-10 " />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Card(props) {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        router.push(
          `/courses/${props.title.split(" ").join("-").toLowerCase()}`
        )
      }
      className="hover:-translate-y-2 cursor-pointer transition-all duration-150 ease-in hover:shadow-300/40 rounded-xl shadow-xl shadow-200/30"
    >
      <div className=" h-[200px] w-full">
        <img
          src={props.image}
          alt={props.title}
          className="rounded-t-xl w-full  h-full"
        />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex gap-2 items-center">
          <span className="text-base whitespace-nowrap text-zinc-800 flex gap-2 items-center">
            <div>
              {props.level === "Intermidiate" ? (
                <img
                  src="/course/intermidiate.png"
                  alt="intermidiate"
                  className="w-5 h-5"
                />
              ) : props.level === "Expert" ? (
                <img
                  src="/course/expert.png"
                  alt="expert"
                  className="w-5 h-5"
                />
              ) : (
                <img
                  src="/course/beginner.png"
                  alt="beginner"
                  className="w-5 h-5"
                />
              )}
            </div>
            {props.level}
          </span>
          <span className="text-base whitespace-nowrap  text-zinc-800 flex gap-1 items-center">
            <svg
              className="w-6 h-6 fill-zinc-400"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
            >
              <g id="Layer_2">
                <path d="M363.75,148.75c-59.23-59.22-155.27-59.22-214.5,0c-59.22,59.23-59.22,155.27,0,214.5   c59.23,59.22,155.27,59.22,214.5,0C422.97,304.02,422.97,207.98,363.75,148.75z M318.21,330.31   C305.96,323.24,239.59,285,239.59,285H239c0,0,0-110.71,0-126s24-15.84,24,0s0,111.63,0,111.63s52.31,29.69,67.21,38.811   C345.111,318.56,330.46,337.39,318.21,330.31z" />
              </g>
              <g id="Layer_7">
                <g id="Layer_9" />
              </g>
            </svg>
            {props.duration}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="md:text-xl font-semibold text-xl ">{props.title}</h3>
          <p className="text-zinc-600">{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
