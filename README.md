READ ME 

## About The Project

<!--Add Screenshot here -->


RentalDB is an inventory mangement system designed for users who want to manage their rental products. It makes it easy for rental shop owners to add new categories of products as well as new items of within a category. 

RentalDB can also be used as a showroom to potential renters, allowing users to a favorite a particular item they like. 


Features of RentalDB:
* Create and manage a digitial inventory system for your products and their categories. 
* Digitize your rental catelog. 
* Build and manage your own database of categories and items 

### Built With

* [React.js](https://reactjs.org/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Sinatra](http://sinatrarb.com/)
* [SQLite3](https://www.sqlite.org/index.html)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* ruby
  You might already have ruby installed, run this to check 
  ```sh
  ruby -v
  ```
  If you don't have ruby, check this [documentation](https://www.ruby-lang.org/en/documentation/installation/#rvm) for how to install it

### Installation

Create a new directory on your machine and run the following commands in your terminal. 

1. Clone the front-end repo in your root directory
   ```sh
   git clone https://github.com/stevehvaughn/banddb-frontend.git
   ```
2. Clone the back-end repo in your root directory 
   ```sh
   git clone https://github.com/stevehvaughn/banddb-backend.git
   ```
3. Install NPM packages in the frontend directory
   ```sh
   npm install
   ```
4. Install Gemfile packages in the backend directory
   ```sh
   bundle install
   ```
5. Start the rake server in the backend directory
   ```sh
   rake server
   ```
6. Start the App in the frontend directory
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Students Tab
In the Students Tab you can see all of your students. On each student you can assign them a locker, and also easily access their locker combination if they forget it! You can also add new students using the form at the top of the page, or delete a student that is no longer attending your school. 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134093239-9996168c-43ca-4d84-98a0-4f47462bb416.gif"/>
</p>

### Music Library Tab
In the Music Library Tab you can see all of the pieces you have in your library. 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134093303-25697d55-9ad7-40cc-bfa5-a7638be9500a.gif"/>
</p>

### Instrument Inventory Tab
In the Instrument Inventory Tab you can see information about the instruments in the school such as condition, brand, model, and serial number. 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134093414-7b0bedda-64c2-4a36-ba2c-3ad71aaa6e4f.gif"/>
</p>

### Lockers Tab
In the Lockers Tab you see a full list of all the lockers in your room, and any students that are assigned to them. This can be another way to easily access locker information for a student. 
<p align='center'>
  <img width='75%' src="https://user-images.githubusercontent.com/82396393/134093497-07bc57f0-4d92-4b57-9d5b-601447a67eb3.gif"/>