import requests
from BeautifulSoup import BeautifulSoup
target_url = "https://www.facebook.com/login.php"
s = requests.Session()

r = s.get(target_url)

soup = BeautifulSoup(str(r.content))
form = soup.find("form")
childs = form.findChildren()

data = {}
for child in childs:
	attrbs = dict(child.attrs)
	if "name" in attrbs.keys():
		data[attrbs['name']] = attrbs['value']









import mechanize
br  = mechanize.Browser()
br.set_all_readonly(False)
br.set_handle_robots(False)
br.set_handle_refresh(False)
response = br.open(target_url)

