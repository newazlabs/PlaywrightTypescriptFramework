
# map → filter → find → reduce → forEach
map() - It transforms each array item and returns a new array.
filter() - It returns all items that match a condition.
find() - It returns the first item that matches a condition.
reduce() - It reduces an array into one final value.
forEach() - It loops through the array but does not return a new array.

# split → join → trim → includes
split() - It breaks a string into an array.
join() - It joins an array into a string.
trim() - It removes spaces from the beginning and end of a string.
includes() - It checks if an array or string contains a value.

# Object.keys → Object.values → Object.entries
Object.keys() - It returns all property names from an object.
Object.values() - It returns all values from an object.
Object.entries() - It returns key-value pairs from an object.

# JSON.stringify → JSON.parse
JSON.stringify() - It converts an object into a JSON string.
JSON.parse() - It converts a JSON string into an object.

# Promise → async/await → Promise.all
Promise - It makes promise-based code easier to read and waits for the result.
Promise.all() - It runs multiple promises together and waits for all results.


# class → object → constructor → this → method → inheritance → encapsulation → abstraction → polymorphism → POM


1. EC2 → where your apps run (virtual computers in the cloud that execute your backend services)
2. Kafka → moves data between apps (real-time messaging system that passes events like transactions between services)
3. Spark → processes/analyses data (big data engine that quickly calculates, transforms, and analyzes large data streams)
4. Aurora → stores structured data (database) (managed cloud database that saves final clean and reliable data like bank records)


EC2 → where your apps run (like the bank’s main computer where “Send Money” request is received and handled)
Kafka → moves data between apps (like a message line carrying “User A sent $100 to User B” to other systems)
Spark → processes/analyses data (like a smart brain checking balance, fraud, and calculating if transaction is valid)
Aurora → stores structured data (database) (like the bank record book storing final result: A -$100, B +$100)


AWS EC2 (Elastic Compute Cloud)
Virtual computers in the cloud. You can run your applications, servers, or code on them like a normal machine, but hosted by AWS.

Kafka (Apache Kafka)
A messaging system for moving data in real time. Think of it as a “data pipeline” that passes events (like clicks, logs, transactions) between systems.

Spark (Apache Spark)
A big data processing engine. It takes large amounts of data and processes it very fast (analytics, transformations, machine learning).

Amazon Aurora
A managed database from AWS. It’s like MySQL/PostgreSQL but faster, more scalable, and handled by AWS (backups, replication, etc. are automated).




What is a class?
- A class is a blueprint for creating objects.

What is an object?
- An object is an instance created from a class.

What is a constructor?
- A constructor is a special method that runs automatically when we create an object.

What is this?
- this refers to the current object or class instance.

What is inheritance?
- Inheritance means one class can reuse properties and methods from another class.

What is encapsulation?
- Encapsulation means keeping related data and methods inside one class.
- In automation, we keep page locators and page actions inside a page class.

What is abstraction?
- Abstraction means hiding complex details and showing only the simple action.

What is polymorphism?
- Polymorphism means the same method name can behave differently in different classes.

What is Page Object Model and how is it related to OOP?
- Page Object Model is an automation design pattern based on OOP. We create one class for each page. Inside that class, we keep locators and methods for that page. This makes the framework reusable, clean, and easy to maintain.



