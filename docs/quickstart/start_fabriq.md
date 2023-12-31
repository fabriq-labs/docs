---
sidebar_position: 4
sidebar_label: Guide to Start Fabriq
---

# Guide to Start Fabriq

Fabriq is open-source AI-enabled software that helps you understand and engage your audience through personalized actions and can connect to most of your software applications and get all your data to your Single Source of Truth.


Github URL:  [Click here](https://github.com/fabriq-labs/fabriq-platform/tree/master/) to clone the project if you don't have it already.

To ensure a smooth setup process, please follow these steps:
1. Start by initializing the database as described in the attached [documentation](./init_database.md).
2. Next, create organization and user details in both the database and Firebase. The provided documentation links offer comprehensive instructions to guide you through the process.

For detailed guidelines and step-by-step instructions, please refer to the following documentation links: 

- [Guide to Initializing a Database](./init_database.md)
- [Organizations and user creation](./org_setup.md)
- [Firebase Setup](./org_setup.md)


 Once the initial setups are completed, we can proceed to set up a Fabriq app. The first step is to create a [.env](https://github.com/fabriq-labs/fabriq-platform/blob/master/sample%2Cenv) file  and update it with the necessary details.
now you are ready to run a `Fabriq` app

```shell
git clone https://github.com/fabriq-labs/fabriq-platform.git
cd fabriq-platform
docker-compose up -d
```

After the successful execution of the `docker-compose up -d` command, the following components are now running:

- The server component is up and running.
- The worker component is up and running.
- The ELT-wrapper component is up and running.
- Hasura is up and running.
- OpenAI is up and running.

![flyway_running](/img/fabriq_running.png)

This indicates that all the necessary components of the system are active and ready for use.