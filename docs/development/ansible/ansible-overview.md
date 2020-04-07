---
id: ansible-overview
title: Ansible Overview
---

## Playbooks

Plain text YAML files that describe the desired state of something.  
Human and machine readable  
Can be used to build entire application environments  

## Variables

Many different ways to source variables

- Playbooks  
- Files  
- Inventories (group vars and host vars)  
- Command Line  
- Discovered Variables (facts)  
- Ansible Tower  

## Inventories

Static lines of servers  
Ranges  
Other custom things  
Dynamic lists of servers: AWS, Azure, Google Cloud Platform, etc.  
Ultimately, lists of things you want to automate across.  

- Playbooks contain plays
- plays contain tasks
- tasks call modules

Tasks run sequentially

Handlers are triggered by tasks, and are run once, at the end of plays.  

## Modules

There are over 450 Ansible provided modules that automate nearly every part of your environment.

Standard Structure: 

- module: directive1=value directive2=value  

## Using Ansible

How to run:  

- Ad-hoc - Call directly from the command line. Ansible \<inventory> -m
- Playbook - ansible-playbook
- Automation Framework - ansible tower

## Check Mode

Dry run for ad-hoc commands and Playbooks

- Validate playbook runs before making state changes on target systems

## Inventory

- Defaults to being saved in /etc/ansible/hosts  
- Specify different inventory using i\<path> option on the command line  
- The preferred practice in Ansible is to not store variables in the main inventory file.

## YAML

YAML Ain't Markup Language

- YAML is a human friendly data serialization standard for all programming languages.  
- Ansible uses YAML because it is easier for humans to read and write than other common data formats like XML or JSON. Further, there are libraries available in most programming languages for working with YAML.
- YAML files begin with `---` and end with `...`
- All members of a list are lines beginning at the same indentation level starting with a "- " (a dash and a space)
- A dictionary is represented in a simple key: value form (there must be a space after the colon)
- More complex data structures are possible, such as lists of dictionaries, dictionaries whose values are lists, or a mix of both.
- Dictionaries and lists can also be represented in abbreviated form.
  - Example:  

```

---
martin: {name: Martin Dev, job: developer, skills: Elite}
fruits: ['Apple','Orange','Strawberry','Mango']

Ansible does not use boolean values often, but they exist. Yes, no, true, or false may be used.

Inventories

Items to automate 

https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html

YAML Syntax

This is important as YAML is used to write Ansible Playbooks

https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html#yaml-syntax

Ansible Facts

Setup Task - This task is run whenever a playbook is run and it gathers a whole host of facts about the remote machine(s) — IP addresses, disks, OS version… etc. Ansible refers to these as “facts”.

Ansible Custom Facts

https://medium.com/@jezhalford/ansible-custom-facts-1e1d1bf65db8

Custom configuration of ansible facts. On any Ansible controlled host — that is, the remote machine that is being controlled and not the machine on which the playbook is run — you just need to create a directory at /etc/ansible/facts.d. Inside this directory, you can place one or more *.fact files. These are files that return JSON data, which will then be included in the raft of facts that Ansible gathers at the start of each playbook run. You can name them anything you like, as long as they use the *.fact extension

Gather Facts

Facts are described in the playbooks section and represent discovered variables about a system. These can be used to implement conditional execution of tasks but also just to get ad-hoc information about your system. You can see all facts via:

$ ansible all -m setup

It’s also possible to filter this output to just export certain facts

Facts are information derived from speaking with your remote systems.

An example of this might be the IP address of the remote host, or what the operating system is.

To see what information is available, try the following:

ansible hostname -m setup

This will return a large amount of variable data

As discussed in the playbooks chapter, Ansible facts are a way of getting data about remote systems for use in playbook variables.

Usually these are discovered automatically by the setup module in Ansible. Users can also write custom facts modules, as described in the API guide. However, what if you want to have a simple way to provide system or user provided data for use in Ansible variables, without writing a fact module?

“Facts.d” is one mechanism for users to control some aspect of how their systems are managed.

If a remotely managed system has an /etc/ansible/facts.d directory, any files in this directory ending in .fact, can be JSON, INI, or executable files returning JSON, and these can supply local facts in Ansible. An alternate directory can be specified using the fact_path play keyword.

For example, assume /etc/ansible/facts.d/preferences.fact contains:

[general]

 asdf=1

 bar=2

This will produce a hash variable fact named general with asdf and bar as members. To validate this, run the following:

ansible <hostname> -m setup -a "filter=ansible_local"

And you will see the following fact added:

"ansible_local": {

"preferences": {

"general": {

"asdf" : "1",

"bar": "2"

}

}

}

And this data can be accessed in a template/playbook as:

{{ ansible_local.preferences.general.asdf }}

The local namespace prevents any user supplied fact from overriding system facts or variables defined elsewhere in the playbook.

To run a custom fact once the files are in place, you must specify the custom fact path (/home/vtguser/ansibleplaybooks/facts.d) :

ansible apsrt3596 -m setup -a "fact_path='/home/vtguser/ansibleplaybooks/facts.d'" > /home/vtguser/ansibleplaybooks/customfacts/export/<whatever>.txt

Run a playbook

CustomFacts.yml --limit apsrt3596

https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#information-discovered-from-systems-facts

ansible xaas -i /home/vtguser/ansibleplaybooks/sandbox -m setup -a 'gather_subset=ohai' --tree /home/vtguser/ansibleplaybooks/ohai/ohaidata/

ansible xaas -i /home/vtguser/ansibleplaybooks/sandbox -m setup -a 'gather_subset=ohai' --tree /home/vtguser/ansibleplaybooks/

set up task to

write python script

- skip in one level and go from there

Maybe dump data to:

rdb - relational databse

Research:

ansible filters

ansible tasks

json should be good enough to compare outputs. Run with ansible and chef and diff outputs

- figure out what info is relevant in chef and ansible 

:x

which python

#/bin/python +x

https://linuxacademy.com/community/posts/show/topic/25690-gather-server-info-and-save-in-csv-file-with-ansbile

https://github.com/fboender/ansible-cmdb

https://github.com/fboender/ansible-cmdb/blob/master/src/ansible-cmdb.py

Plural Sight