## AWS
Amazon Web Services has been the market leading cloud computing platform since 2011, ahead of Azure and Google Cloud. AWS offers over 200 services with data centers located all over the globe.

AWS service is an online platform that provides scalable and cost-effective cloud computing solutions. It is broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery and so on.

[docs](https://docs.aws.amazon.com/)

### Assumptions
- You have basic-to-moderate Linux systems administration skills
- You are at least familiar with programming/scripting. You don’t need to be a whiz but you should have some decent hands-on experience automating and programming.
- You are willing to dedicate the time to overcome complex issues.
- You have an AWS Account and a marginal amount of money to spend improving your skills.
### How to use this guide:
- This is not a step by step how-to guide.
- You should take each goal and “figure it out”. I have hints to guide you in the right direction.
- Google is your friend. AWS Documentation is your friend. Stack Overflow is your friend.
- Find out and implement the “right way”, not the quick way. Ok, maybe do the quick way first then refactor to the right way before moving on.
- Shut down or de-provision as much as you can between learning sessions. You should be able to do everything in this guide for literally less than $50 using the AWS Free Tier. Rebuilding often will reinforce concepts anyway.
- Skip ahead and read the Cost Analysis and Automation sections and have them in the back of your mind as you work through the goals.
- Lastly, just get hands on, no better time to start then NOW.
### Project Overview
- This is NOT a guide on how to develop websites on AWS. This uses a website as an excuse to use all the technologies AWS puts at your fingertips. The concepts you will learn going through these exercises apply all over AWS.

- This guide takes you through a maturity process from the most basic webpage to an extremely cheap scalable web application. The small app you will build does not matter. It can do anything you want, just keep it simple.

- Need an idea? Here: Fortune-of-the-Day - Display a random fortune each page load, have a box at the bottom and a submit button to add a new fortune to the random fortune list.

### Account Basics
- Create an IAM user for your personal use.
- Set up MFA for your root user, turn off all root user API keys.
- Set up Billing Alerts for anything over a few dollars.
- Configure the AWS CLI for your user using API credentials.
- Checkpoint: You can use the AWS CLI to interrogate information about your AWS account.
### Web Hosting Basics
- Deploy a EC2 VM and host a simple static “Fortune-of-the-Day Coming Soon” web page.
- Take a snapshot of your VM, delete the VM, and deploy a new one from the snapshot. Basically disk backup + disk restore.
- Checkpoint: You can view a simple HTML page served from your EC2 instance.
### Autoscaling
- Create an AMI from that VM and put it in an autoscaling group so one VM always exists.
- Put a Elastic Load Balancer infront of that VM and load balance between two Availability Zones (one EC2 in each AZ).
- Checkpoint: You can view a simple HTML page served from both of your EC2 instances. You can turn one off and your website is still accessible.
### External Data
-  Create a DynamoDB table and experiment with loading and retrieving data manually, then do the same via a script on your local machine.
- Refactor your static page into your Fortune-of-the-Day website (Node, PHP, Python, whatever) which reads/updates a list of fortunes in the AWS DynamoDB table. (Hint: EC2 Instance Role)
- Checkpoint: Your HA/AutoScaled website can now load/save data to a database between users and sessions
### Web Hosting Platform-as-a-Service
- Retire that simple website and re-deploy it on Elastic Beanstalk.
- Create a S3 Static Website Bucket, upload some sample static pages/files/images. Add those assets to your Elastic Beanstalk website.
- Register a domain (or re-use and existing one). Set Route53 as the Nameservers and use Route53 for DNS. Make www.yourdomain.com go to your Elastic Beanstalk. Make static.yourdomain.com serve data from the S3 bucket.
- Enable SSL for your Static S3 Website. This isn’t exactly trivial. (Hint: CloudFront + ACM)
- Enable SSL for your Elastic Beanstalk Website.
- Checkpoint: Your HA/AutoScaled website now serves all data over HTTPS. The same as before, except you don’t have to manage the servers, web server software, website deployment, or the load balancer.
### Microservices
- Refactor your EB website into ONLY providing an API. It should only have a POST/GET to update/retrieve that specific data from DynamoDB. Bonus: Make it a simple REST API. Get rid of www.yourdomain.com and serve this EB as api.yourdomain.com
- Move most of the UI piece of your EB website into your Static S3 Website and use Javascript/whatever to retrieve the data from your api.yourdomain.com URL on page load. Send data to the EB URL to have it update the DynamoDB. Get rid of static.yourdomain.com and change your S3 bucket to serve from www.yourdomain.com.
- Checkpoint: Your EB deployment is now only a structured way to retrieve data from your database. All of your UI and application logic is served from the S3 Bucket (via CloudFront). You can support many more users since you’re no longer using expensive servers to serve your website’s static data.
### Serverless
- Write a AWS Lambda function to email you a list of all of the Fortunes in the DynamoDB table every night. Implement Least Privilege security for the Lambda Role. (Hint: Lambda using Python 3, Boto3, Amazon SES, scheduled with CloudWatch)
- Refactor the above app into a Serverless app. This is where it get’s a little more abstract and you’ll have to do a lot of research, experimentation on your own.
- The architecture: Static S3 Website Front-End calls API Gateway which executes a Lambda Function which reads/updates data in the DyanmoDB table.
- Use your SSL enabled bucket as the primary domain landing page with static content.
- Create an AWS API Gateway, use it to forward HTTP requests to an AWS Lambda function that queries the same data from DynamoDB as your EB Microservice.
- Your S3 static content should make Javascript calls to the API Gateway and then update the page with the retrieved data.
- Once you have the “Get Fortune” API Gateway + Lambda working, do the “New Fortune” API.
- Checkpoint: Your API Gateway and S3 Bucket are fronted by CloudFront with SSL. You have no EC2 instances deployed. All work is done by AWS services and billed as consumed.
### Cost Analysis
- Explore the AWS pricing models and see how pricing is structured for the services you’ve used.
- Answer the following for each of the main architectures you built:
- Roughly how much would this have costed for a month?
- How would I scale this architecture and how would my costs change?
### Architectures
- Basic Web Hosting: HA EC2 Instances Serving Static Web Page behind ELB
- Microservices: Elastic Beanstalk SSL Website for only API + S3 Static Website for all static content + DynamoDB Table + Route53 + CloudFront SSL
- Serverless: Serverless Website using API Gateway + Lambda Functions + DynamoDB + Route53 + CloudFront SSL + S3 Static Website for all static content
### Automation
- These technologies are the most powerful when they’re automated. You can make a Development environment in minutes and experiment and throw it away without a thought. This stuff isn’t easy, but it’s where the really skilled people excel.
- Automate the deployment of the architectures above. Use whatever tool you want. The popular ones are AWS CloudFormation or Teraform. Store your code in AWS CodeCommit or on GitHub. Yes, you can automate the deployment of ALL of the above with native AWS tools.
- I suggest when you get each app-related section of the done by hand you go back and automate the provisioning of the infrastructure. For example, automate the provisioning of your EC2 instance. Automate the creation of your S3 Bucket with Static Website Hosting enabled, etc. This is not easy, but it is very rewarding when you see it work.
### Continuous Delivery
- As you become more familiar with Automating deployments you should explore and implement a Continuous Delivery pipeline.
- Develop a CI/CD pipeline to automatically update a dev deployment of your infrastructure when new code is published, and then build a workflow to update the production version if approved. Travis CI is a decent SaaS tool, Jenkins has a huge following too, if you want to stick with AWS-specific technologies you’ll be looking at CodePipeline.
### Miscellaneous / Bonus
These didn’t fit in nicely anywhere but are important AWS topics you should also explore:

- IAM: You should really learn how to create complex IAM Policies. You would have had to do basic roles+policies for for the EC2 Instance Role and Lambda Execution Role, but there are many advanced features.
- Networking: Create a new VPC from scratch with multiple subnets (you’ll learn a LOT of networking concepts), once that is working create another VPC and peer them together. Get a VM in each subnet to talk to eachother using only their private IP addresses.
- KMS: Go back and redo the early EC2 instance goals but enable encryption on the disk volumes. Learn how to encrypt an AMI.