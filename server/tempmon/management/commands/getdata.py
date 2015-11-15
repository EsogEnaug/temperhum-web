# vim: sts=4 sw=4 ts=4 ai et
import subprocess
import re
from django.core.management.base import BaseCommand, CommandError

from tempmon.models import Temperature,Humidity,DewPoint

class Command(BaseCommand):
    help = 'Retrive data from sensor and stor it to database'

    def handle(self, *args, **options):
        popen = subprocess.Popen("/usr/local/bin/tempered", shell=False, stdout=subprocess.PIPE)
        popen.wait()
        pattern = re.compile(r".* temperature (?P<temperature>[\-0-9.]+) °C, relative humidity (?P<humidity>[\-0-9.]+)%, dew point (?P<dewpoint>[\-0-9.]+) °C", re.DOTALL)
        matches = pattern.search(popen.stdout.read().decode()).groupdict()
        Temperature(data=matches['temperature']).save()
        Humidity(data=matches['humidity']).save()
        DewPoint(data=matches['dewpoint']).save()

        self.stdout.write('Successfully log data, temperature={temperature}, humidity={humidity}, dewpoint={dewpoint}'.format(**matches))
