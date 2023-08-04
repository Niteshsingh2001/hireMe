from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ItemSerializer
from .models import Item
from django.db.models import Q

default_limit = 10


@api_view(['GET'])
def getItems(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items[:default_limit], many=True)

    # try:
    #     with open('./helper/random_data.json', 'r') as json_file:
    #         data = json.load(json_file)
    #         for entry in data:
    #             job_listing = Item(
    #                 name=entry['job title'],
    #                 description=entry['description'],
    #                 company=entry['company'],
    #                 salary=entry['salary'],
    #                 applied=random.randrange(1, 300),
    #                 created_date=datetime.strptime(
    #                     entry['created_date'], '%Y-%m-%d').date(),
    #             )
    #             print(job_listing)
    #             job_listing.save()
    # except json.decoder.JSONDecodeError as e:
    #     print("**************** Error decoding JSON data:", e)
    #     data = []

    return JsonResponse({"currentJobs": default_limit, "totalJobs": len(items), "data": serializer.data})


@api_view(['GET'])
def getSearch(request, query):
    totalItems = len(Item.objects.all())
    query_set = Q()
    for word in query:
        query_set &= Q(name__icontains=word)
    results = Item.objects.filter(query_set)
    serializer = ItemSerializer(results, many=True)
    return JsonResponse({"currentJobs": len(results), "totalJobs": totalItems, "data": serializer.data})
